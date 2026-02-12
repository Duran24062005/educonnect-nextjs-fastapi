"""
Teacher routes for the API.
"""
from fastapi import APIRouter, UploadFile, Depends
from sqlalchemy.orm import Session

from ..schemas.teacher_schema import TeacherSchema, TeacherCreateSchema, TeacherUpdateSchema
from ..controllers.teachers_controller import TeacherController
from ..config.database import get_db

teacher_routes = APIRouter()


@teacher_routes.get(
    "/all",
    response_model=list[TeacherSchema],
    summary="Get all teachers",
    description="Retrieve a list of all teachers in the system",
)
def get_all_teachers(db: Session = Depends(get_db)) -> list[TeacherSchema]:
    """Get all teachers."""
    return TeacherController.get_teachers(db)


@teacher_routes.get(
    "/{teacher_id}",
    response_model=TeacherSchema,
    summary="Get teacher by ID",
    description="Retrieve a specific teacher by their ID",
)
def get_teacher(teacher_id: int, db: Session = Depends(get_db)) -> TeacherSchema:
    """Get a teacher by ID."""
    return TeacherController.get_teacher_by_id(teacher_id, db)


@teacher_routes.get(
    "/{teacher_id}/posts",
    summary="Get teacher posts",
    description="Retrieve all posts created by a specific teacher",
)
def get_teacher_posts(teacher_id: int, db: Session = Depends(get_db)):
    """Get all posts from a teacher."""
    return TeacherController.get_post_by_teacher(teacher_id, db)


@teacher_routes.post(
    "/",
    response_model=TeacherSchema,
    status_code=201,
    summary="Create teacher",
    description="Create a new teacher in the system",
)
def create_teacher(
    teacher: TeacherCreateSchema, db: Session = Depends(get_db)
) -> TeacherSchema:
    """Create a new teacher."""
    return TeacherController.create_teacher(teacher, db)


@teacher_routes.post(
    "/{teacher_id}/upload",
    summary="Upload teacher image",
    description="Upload an image file for a teacher",
)
def upload_teacher_image(
    teacher_id: int, file: UploadFile, db: Session = Depends(get_db)
):
    """Upload a file for a teacher."""
    return TeacherController.upload_file(teacher_id, file, db)


@teacher_routes.put(
    "/{teacher_id}",
    response_model=TeacherSchema,
    summary="Update teacher",
    description="Update an existing teacher's information",
)
def update_teacher(
    teacher_id: int,
    teacher: TeacherUpdateSchema,
    db: Session = Depends(get_db),
) -> TeacherSchema:
    """Update a teacher."""
    return TeacherController.update_teacher(teacher_id, teacher, db)


@teacher_routes.delete(
    "/{teacher_id}",
    summary="Delete teacher",
    description="Delete a teacher from the system",
)
def delete_teacher(teacher_id: int, db: Session = Depends(get_db)):
    """Delete a teacher."""
    return TeacherController.delete_teacher(teacher_id, db)
