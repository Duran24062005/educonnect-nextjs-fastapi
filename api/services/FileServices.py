import os
import uuid
from sqlalchemy.orm import Session
from fastapi import HTTPException, UploadFile
from ..models.teacher_models import Teacher as TeacherEntity
from ..models.father_models import Father as FatherEntity
from ..models.student_models import Student as StudentEntity
from ..models.posts_model import Post as PostEntity

class FileService:

    def __init__(self, db:Session)->None:
        self.db = db

    def upload_file_teacher(self, teacher_id: int, file: UploadFile):
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
    
    def upload_file_father(self, father_id: int, file: UploadFile):
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
        teacher = self.db.query(FatherEntity).filter(FatherEntity.id == father_id).first()
        if not teacher:
            raise HTTPException(status_code=404, detail="Father not found")
        
        teacher.imageUrl = image_url  # Actualiza el campo con la nueva URL
        self.db.commit()  # Guarda los cambios en la base de datos
        self.db.close()
        return {"message": "Image uploaded and URL updated", "image_url": image_url}
    
    def upload_file_student(self, file: UploadFile):
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
        return image_url
    
    def upload_file_post(self, file: UploadFile):
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
        return image_url
