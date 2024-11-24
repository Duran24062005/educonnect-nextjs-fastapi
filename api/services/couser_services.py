from ..models.course_models import Course as CourseEntity
from sqlalchemy.orm import Session, joinedload


class CourseServices:

    def __init__(self, db: Session)->None:
        self.db = db

    def get_courses(self):
        """Retrive all courses from database"""
        courses = (
            self.db.query(CourseEntity)
            .options(joinedload(CourseEntity.students))
            .all()
            )
        return courses
    
    def get_course_by_id(self, course_id: int):
        """Retrive course by id from database"""
        return self.db.query(CourseEntity).filter(CourseEntity.id == course_id).first()
    
    def create_course(self, course_data):
        """Create a new course in database"""
        new_course = CourseEntity(**course_data.model_dump())
        self.db.add(new_course)
        self.db.commit()
        self.db.refresh(new_course)
        self.db.close()
        return new_course
    
    def update_course(self, course_id: int, course_data):
        """Update a course in database"""
        course = self.get_course_by_id(course_id)
        if course:
            for key, value in course_data.items():
                setattr(course, key, value)
            self.db.commit()
            self.db.refresh(course)
            return course
        
    def delete_course(self, course_id: int):
        """Delete a course from database"""
        course = self.get_course_by_id(course_id)
        if not course:
            self.db.delete(course)
            self.db.commit()
            return True
        return False
        
            
    
