from ..schemas.father_schema import Father
from ..services.fathers_services import FatherService
from ..config.database import Session


class FatherController():
    def __init__(self):
        self.father_services = FatherService()
        self.session = Session()

    def get_fathers(self)->list[Father]:
        """Get all teachers from the database.
        Returns:
        list[Teacher]: A list of all teachers.
        """
        db = self.session()
        teacher_services = self.father_services(db).get_fathers()
        return teacher_services