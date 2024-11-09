from ..schemas.student_schema import Student
from ..services.students_services import StudentService
from ..config.database import Session


class TeacherController():
    def __init__(self):
        self.teacher_services = StudentService()
        self.session = Session()

    def get_teachers(self)->list[Student]:
        """Get all teachers from the database.
        Returns:
        list[Teacher]: A list of all teachers.
        """
        db = self.session()
        teacher_services = StudentService(db).get_teachers()
        return teacher_services