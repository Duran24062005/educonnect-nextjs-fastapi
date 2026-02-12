"""
Teacher controller layer for handling HTTP requests.
"""
from typing import List
from sqlalchemy.orm import Session
from fastapi import UploadFile, Depends

from ..schemas.teacher_schema import TeacherSchema, TeacherCreateSchema, TeacherUpdateSchema
from ..services.teachers_services import TeacherServices
from ..config.database import get_db
from ..send_email.send_email import SendCustomEmail
from ..core.config import settings
from ..core.logging_config import logger


class TeacherController:
    """
    Controller class for teacher-related operations.
    
    This class handles HTTP requests and delegates business logic to services.
    """

    @staticmethod
    def get_teachers(db: Session = Depends(get_db)) -> List[TeacherSchema]:
        """Get all teachers from the database."""
        service = TeacherServices(db)
        teachers = service.get_teachers()
        return [TeacherSchema.model_validate(teacher) for teacher in teachers]

    @staticmethod
    def get_teacher_by_id(
        teacher_id: int, db: Session = Depends(get_db)
    ) -> TeacherSchema:
        """Get a teacher by id from the database."""
        service = TeacherServices(db)
        teacher = service.get_teacher_by_id(teacher_id)
        return TeacherSchema.model_validate(teacher)
        
    @staticmethod
    def get_post_by_teacher(
        teacher_id: int, db: Session = Depends(get_db)
    ) -> List:
        """Get all posts from a teacher."""
        service = TeacherServices(db)
        return service.get_post_teacher(teacher_id)

    @staticmethod
    def create_teacher(
        teacher: TeacherCreateSchema, db: Session = Depends(get_db)
    ) -> TeacherSchema:
        """Create a new teacher in the database."""
        service = TeacherServices(db)
        created_teacher = service.create_teacher(teacher)
        
        # Send welcome email asynchronously (in production, use background tasks)
        try:
            email_service = SendCustomEmail(
                receiver_email=created_teacher.email,
                subject=f"Bienvenido a la plataforma {created_teacher.first_name}",
                template_name="welcome_v1",
                data={
                    "first_name": created_teacher.first_name,
                    "last_name": created_teacher.last_name,
                    "verification_link": f"{settings.FRONTEND_URL}/verify",
                },
            )
            email_service.send_email()
            logger.info(f"Welcome email sent to {created_teacher.email}")
        except Exception as e:
            logger.warning(f"Failed to send welcome email: {e}")
            # Don't fail the request if email fails
        
        return TeacherSchema.model_validate(created_teacher)

    @staticmethod
    def upload_file(
        teacher_id: int, file: UploadFile, db: Session = Depends(get_db)
    ) -> dict:
        """Upload a file for a teacher."""
        service = TeacherServices(db)
        return service.upload_file(teacher_id, file)

    @staticmethod
    def update_teacher(
        teacher_id: int,
        teacher: TeacherUpdateSchema,
        db: Session = Depends(get_db),
    ) -> TeacherSchema:
        """Update a teacher in the database."""
        service = TeacherServices(db)
        updated_teacher = service.update_teacher(
            teacher_id, teacher.model_dump(exclude_unset=True)
        )
        return TeacherSchema.model_validate(updated_teacher)

    @staticmethod
    def delete_teacher(
        teacher_id: int, db: Session = Depends(get_db)
    ) -> dict:
        """Delete a teacher from the database."""
        service = TeacherServices(db)
        service.delete_teacher(teacher_id)
        return {"message": "Teacher deleted successfully"}


        
