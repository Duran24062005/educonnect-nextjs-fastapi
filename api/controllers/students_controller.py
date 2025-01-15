from ..schemas.student_schema import Student, CreateStudent
from ..services.students_services import StudentService
from ..config.database import Session


class StudentController():

    def get_students()->list[Student]:
        """Get all teachers from the database.
        Returns:
        list[Teacher]: A list of all teachers.
        """
        try:
            with Session() as db:
                response = StudentService(db).get_students()
                return response
        except Exception as e:
            return f"An error occurred: {e}"
        
    def get_student(student_id: int):
        """Get a student by id from the database.
        Args:
        student_id (int): The id of the student to get.
        Returns:
        Student: The student with the given id.
        """
        try:
            with Session() as db:
                response = StudentService(db).get_student_by_id(student_id)
                return response
        except Exception as e:
            return f"An error occurred: {e}"

    def create_student(data: CreateStudent):
        """Create a new student in the database.
        Args:
        data (Student): The student data to be created.
        Returns:
        Student: The created student.
        """
        try:
            with Session() as db:
                response = StudentService(db).create_student(data)
                return response
        except Exception as e:
            return f"An error occurred: {e}"
        
    def update_student(id: int, date: CreateStudent):
        """Update a student in the database.
        Args:
        id (int): The id of the student to be updated.
        date (Student): The updated student data.
        Returns:
        Student: The updated student.
        """
        try:
            with Session() as db:
                response = StudentService(db).update_student(id, date)
                return response
        except Exception as e:
            return f"An error occurred: {e}"
        
    def delete_student(id: int):
        """Delete a student by id from the database.
        Args:
        id (int): The id of the student to delete.
        Returns:
        bool: True if the student was deleted, False otherwise.
        """
        try:
            with Session() as db:
                response = StudentService(db).delete_student(id)
                if response:
                    return {"Message": "deleted successfully"}
                return None
        except Exception as e:
            return f"An error occurred: {e}"