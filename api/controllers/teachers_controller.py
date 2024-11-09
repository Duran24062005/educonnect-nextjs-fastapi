from ..schemas.teacher_schema import TeacherSchema, TeacherCreateSchema, TeacherUpdateSchema
from ..services.teachers_services import TeacherServices
from ..config.database import Session
from sqlalchemy.exc import SQLAlchemyError
from fastapi import UploadFile

class TeacherController:

    def get_teachers() -> list[TeacherSchema]:
        """Get all teachers from the database."""
        try:
            with Session() as db:
                return TeacherServices(db).get_teachers()
        except SQLAlchemyError as e:
            print(f"Error fetching teachers: {e}")
            return []

    def get_teacher_by_id(id: int) -> TeacherSchema:
        """Get a teacher by id from the database."""
        try:
            db = Session()
            return TeacherServices(db).get_teacher_by_id(id)
        except SQLAlchemyError as e:
            print(f"Error fetching teacher with id {id}: {e}")
            return None
        
    def get_post_by_teacher(id: int):
        """Get all posts from a teacher."""
        try:
            with Session() as db:
                return TeacherServices(db).get_post_teacher(id)
        except SQLAlchemyError as e:
            print(f"Error fetching teacher post: {e}")
            return None

    def create_teacher(teacher: TeacherCreateSchema) -> TeacherCreateSchema:
        """Create a new teacher in the database."""
        try:
            with Session() as db:
                return TeacherServices(db).create_teacher(teacher)
        except SQLAlchemyError as e:
            print(f"Error creating teacher: {e}")
            return None

    def upload_file(teacher_id: int, file: UploadFile):
        try:
            with Session() as db:
                return TeacherServices(db).upload_file(teacher_id, file)
        except SQLAlchemyError as e:
            print(f"Error uploading file: {e}")
            return None

    def update_teacher(id: int, teacher: TeacherUpdateSchema) -> TeacherUpdateSchema:
        """Update a teacher in the database."""
        try:
            with Session() as db:
                return TeacherServices(db).update_teacher(id, teacher)
        except SQLAlchemyError as e:
            print(f"Error updating teacher with id {id}: {e}")
            return None

    def delete_teacher(id: int) -> bool:
        """Delete a teacher from the database."""
        try:
            with Session() as db:
                response = TeacherServices(db).delete_teacher(id)
                if response:
                    return {"Message": "Theacher deleted successfully"}
        except SQLAlchemyError as e:
            print(f"Error deleting teacher with id {id}: {e}")
            return False


        
