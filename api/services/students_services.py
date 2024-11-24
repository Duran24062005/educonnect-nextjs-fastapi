from ..models.student_models import Student as StudentEntity
from ..schemas.student_schema import CreateStudent
from sqlalchemy.orm import Session, joinedload

class StudentService:

    def __init__(self, db: Session) -> None:
        self.db = db

    def get_students(self):
        students = (
            self.db.query(StudentEntity)
            .options(joinedload(StudentEntity.course))
            .all()
        )
        return students

    def get_student_by_id(self, id: int):
        student = self.db.query(StudentEntity).filter(StudentEntity.id == id).first()
        return student

    def create_student(self, student_dates):
        student = StudentEntity(**student_dates.model_dump())
        self.db.add(student)
        self.db.commit()
        self.db.refresh(student)
        return student

    def update_student(self, id, data):
        # Buscar el estudiante por ID
        student = self.db.query(StudentEntity).filter(StudentEntity.id == id).first()
        if not student:
            return None
        
        # Actualizar los campos del estudiante
        for key, value in data.model_dump(exclude_unset=True).items():
            setattr(student, key, value)
        
        # Confirmar los cambios
        self.db.commit()
        self.db.refresh(student)
        return student

    def delete_student(self, student_id):
        student = self.db.query(StudentEntity).filter(StudentEntity.id == student_id).first()
        if student:
            self.db.delete(student)
            self.db.commit()
            return True
        return False
