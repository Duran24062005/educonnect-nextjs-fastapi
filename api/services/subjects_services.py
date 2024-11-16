from ..models.grade_models import Grade as GradeEntity
from sqlalchemy.orm import Session


class GradeServices:

    def __init__(self, db: Session):
        self.db = db

    def get_grades(self)->list[GradeEntity]:
        return self.db.query(GradeEntity).all()
    
    def get_grades_by_id(self, id: int)->GradeEntity:
        return self.db.query(GradeEntity).filter(GradeEntity.id == id).first()
    
    def create_grade(self, grade_data: GradeEntity)->GradeEntity:
        self.db.add(**grade_data.model_dump())
        self.db.commit()
        return grade_data


