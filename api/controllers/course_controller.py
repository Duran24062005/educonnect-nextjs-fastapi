from ..schemas.course_schema import CourseSchema, CourseCreateSchema, CourseUpdateSchema
from ..services.couser_services import CourseServices
from ..config.database import Session
from sqlalchemy.exc import SQLAlchemyError

class CourseController:

    def get_courses()->list[CourseSchema]:
        """Get all courses from database"""
        try:
            with Session() as db:
                return CourseServices(db).get_courses()
        except SQLAlchemyError as e:
            print(f"Error fetching courses: {e}")
            return None
    
    @staticmethod
    def get_courses_leng():
        try:
            len_courses = CourseController.get_courses()
            return len(len_courses)
        except Exception as e:
            print(f"Error fetching courses: {e}")
            return None
        
    def get_course_by_id(id: int)->CourseSchema:
        """Get course by id from database"""
        try:
            with Session() as db:
               response = CourseServices(db).get_course_by_id(id)
               if response is not None:
                   return response
               else:
                   return {"error": "Course not found"}
        except SQLAlchemyError as e:
            print(f"Error fetching course by id: {e}")
            return None
        
    def create_course(course: CourseCreateSchema)->CourseCreateSchema:
        """Create a new course in the database"""
        try:
            with Session() as db:
                return CourseServices(db).create_course(course)
        except SQLAlchemyError as e:
            print(f"Error creating course: {e}")
            return None
        
    def update_course(id: int, course_data: CourseUpdateSchema)->CourseUpdateSchema:
        """Update course"""
        try: 
            with Session() as db:
                return CourseServices(db).update_course(id, course_data)
        except SQLAlchemyError as e:
            print(f"Error updating course: {e}")
            return None

    def delete_course(id: int):
        """Delete a course from the database"""
        try:
            with Session() as db:
                response = CourseServices(db).delete_course(id)
                if response:
                    return {"Message": "Theacher deleted successfully"}
        except SQLAlchemyError as e:
            print(f"Error deleting course whith {id}: {e}")
            return None