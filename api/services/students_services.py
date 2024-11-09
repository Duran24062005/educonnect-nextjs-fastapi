from ..models.student_models import Student as StudentEntity

class StudentService():

    def __init__(self, db)->None:
        self.db = db

    def get_students(self):
        return self.db.query(StudentEntity).all()