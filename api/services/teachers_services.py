"""
Teacher service layer for business logic.
"""
from pathlib import Path
import uuid
from typing import Optional, List
from sqlalchemy.orm import Session, joinedload
from fastapi import UploadFile, HTTPException, status

from ..models.teacher_models import Teacher as TeacherEntity
from ..schemas.teacher_schema import TeacherCreateSchema, TeacherUpdateSchema
from ..core.config import settings
from ..core.exceptions import NotFoundError, ValidationError
from ..core.logging_config import logger


class TeacherServices:
    """Service class for teacher-related operations."""

    def __init__(self, db: Session) -> None:
        self.db = db

    def get_teachers(self) -> List[TeacherEntity]:
        """Retrieve all teachers from the database."""
        try:
            teachers = (
                self.db.query(TeacherEntity)
                .options(joinedload(TeacherEntity.posts))
                .all()
            )
            logger.info(f"Retrieved {len(teachers)} teachers")
            return teachers
        except Exception as e:
            logger.error(f"Error retrieving teachers: {e}")
            raise

    def get_teacher_by_id(self, teacher_id: int) -> TeacherEntity:
        """Retrieve a teacher by their ID."""
        teacher = (
            self.db.query(TeacherEntity)
            .filter(TeacherEntity.id == teacher_id)
            .first()
        )
        if not teacher:
            raise NotFoundError("Teacher", str(teacher_id))
        return teacher
    
    def get_post_teacher(self, teacher_id: int) -> List:
        """Retrieve all posts for a specific teacher by their ID."""
        teacher = (
            self.db.query(TeacherEntity)
            .options(joinedload(TeacherEntity.posts))
            .filter_by(id=teacher_id)
            .first()
        )
        
        if not teacher:
            raise NotFoundError("Teacher", str(teacher_id))
        
        return teacher.posts 
    
    def upload_file(self, teacher_id: int, file: UploadFile) -> dict:
        """Upload a file for a teacher."""
        # Validate file type
        if file.content_type not in settings.ALLOWED_EXTENSIONS:
            raise ValidationError(
                f"Invalid file type. Allowed types: {', '.join(settings.ALLOWED_EXTENSIONS)}"
            )
        
        # Validate file size
        file_content = file.file.read()
        if len(file_content) > settings.MAX_UPLOAD_SIZE:
            raise ValidationError(
                f"File size exceeds maximum allowed size of {settings.MAX_UPLOAD_SIZE / 1024 / 1024}MB"
            )
        
        # Generate unique filename
        file_extension = Path(file.filename).suffix
        unique_filename = f"{uuid.uuid4().hex}{file_extension}"
        file_path = settings.UPLOAD_DIR / unique_filename
        
        # Save file
        try:
            with open(file_path, "wb") as buffer:
                buffer.write(file_content)
            logger.info(f"File uploaded: {unique_filename}")
        except Exception as e:
            logger.error(f"Error saving file: {e}")
            raise InternalServerError("Failed to save file")
        
        # Get teacher and update image URL
        teacher = self.get_teacher_by_id(teacher_id)
        image_url = f"/uploads/{unique_filename}"
        teacher.imageUrl = image_url
        self.db.commit()
        self.db.refresh(teacher)
        
        return {
            "message": "Image uploaded and URL updated",
            "image_url": image_url,
        }



    def create_teacher(self, teacher_data: TeacherCreateSchema) -> TeacherEntity:
        """Create a new teacher in the database."""
        try:
            # Check if email already exists
            existing_teacher = (
                self.db.query(TeacherEntity)
                .filter(TeacherEntity.email == teacher_data.email)
                .first()
            )
            if existing_teacher:
                from ..core.exceptions import ConflictError
                raise ConflictError(f"Teacher with email {teacher_data.email} already exists")
            
            new_teacher = TeacherEntity(**teacher_data.model_dump())
            self.db.add(new_teacher)
            self.db.commit()
            self.db.refresh(new_teacher)
            logger.info(f"Created teacher with ID: {new_teacher.id}")
            return new_teacher
        except Exception as e:
            self.db.rollback()
            logger.error(f"Error creating teacher: {e}")
            raise

    def update_teacher(
        self, teacher_id: int, teacher_data: dict
    ) -> TeacherEntity:
        """Update an existing teacher."""
        teacher = self.get_teacher_by_id(teacher_id)
        
        try:
            # Update only provided fields
            for key, value in teacher_data.items():
                if value is not None:
                    setattr(teacher, key, value)
            
            self.db.commit()
            self.db.refresh(teacher)
            logger.info(f"Updated teacher with ID: {teacher_id}")
            return teacher
        except Exception as e:
            self.db.rollback()
            logger.error(f"Error updating teacher: {e}")
            raise

    def delete_teacher(self, teacher_id: int) -> bool:
        """Delete a teacher by their ID."""
        teacher = self.get_teacher_by_id(teacher_id)
        
        try:
            self.db.delete(teacher)
            self.db.commit()
            logger.info(f"Deleted teacher with ID: {teacher_id}")
            return True
        except Exception as e:
            self.db.rollback()
            logger.error(f"Error deleting teacher: {e}")
            raise
