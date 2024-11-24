from ..models.teacher_models import Teacher as TeacherEntity
from sqlalchemy.orm import Session, joinedload
from fastapi import UploadFile, HTTPException
import os
import uuid

class TeacherServices:

    def __init__(self, db: Session) -> None:
        self.db = db

    def get_teachers(self):
        """Retrieve all teachers from the database."""
        teachers = (
            self.db.query(TeacherEntity)
            .options(joinedload(TeacherEntity.posts))
            .all()
        )
        return teachers

    def get_teacher_by_id(self, teacher_id: int):
        """Retrieve a teacher by their ID."""
        return self.db.query(TeacherEntity).filter(TeacherEntity.id == teacher_id).first()
    
    def get_post_teacher(self, id: int):
        """Retrieve all posts for a specific teacher by their ID."""
        # Filtra por el `id` del Teacher y carga sus posts usando `joinedload`
        teacher = (
            self.db.query(TeacherEntity)
            .options(joinedload(TeacherEntity.posts))
            .filter_by(id=id)
            .first()
        )
        
        # Verifica si el teacher existe antes de acceder a los posts
        if teacher:
            return teacher.posts
        else:
            return None 
    
    def upload_file(self, teacher_id: int, file: UploadFile):
        """Upload a file to the database."""
        # Assuming the file is a CSV file containing teacher data
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="Invalid file type")
        UPOLOAD_DIR = "./api/uploads"
        os.makedirs(UPOLOAD_DIR, exist_ok=True)
        unique_filename = f"{uuid.uuid4().hex}_{file.filename}"
        file_path = os.path.join(UPOLOAD_DIR, unique_filename)
        with open(file_path, "wb") as buffer:
            buffer.write(file.file.read())

        image_url = f"http://127.0.0.1:8000/uploads/{unique_filename}"
        teacher = self.db.query(TeacherEntity).filter(TeacherEntity.id == teacher_id).first()
        if not teacher:
            raise HTTPException(status_code=404, detail="Teacher not found")
        
        teacher.imageUrl = image_url  # Actualiza el campo con la nueva URL
        self.db.commit()  # Guarda los cambios en la base de datos
        self.db.close()
        
        return {"message": "Image uploaded and URL updated", "image_url": image_url}



    def create_teacher(self, teacher_data):
        """Create a new teacher in the database."""
        new_teacher = TeacherEntity(**teacher_data.model_dump())
        self.db.add(new_teacher)
        self.db.commit()
        self.db.refresh(new_teacher)
        self.db.close()
        return new_teacher
     

    def update_teacher(self, teacher_id: int, teacher_data):
        """Update an existing teacher."""
        teacher = self.db.query(TeacherEntity).filter(TeacherEntity.id == teacher_id).first()
        if not teacher:
            return None
        for key, value in teacher_data.items():
            setattr(teacher, key, value)
        self.db.commit()
        self.db.refresh(teacher)
        return teacher

    def delete_teacher(self, teacher_id: int):
        """Delete a teacher by their ID."""
        teacher = self.db.query(TeacherEntity).filter(TeacherEntity.id == teacher_id).first()
        if teacher:
            self.db.delete(teacher)
            self.db.commit()
            return True
        return False
