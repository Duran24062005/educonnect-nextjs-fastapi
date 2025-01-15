from sqlalchemy.orm import Session
from ..models.teacher_models import Teacher as TeacherEntity
from ..models.student_models import Student as StudentEntity
from ..models.father_models import Father as FatherEntity

class AuthService:

    def __init__(self, db: Session)->None:
        self.db = db