from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class CourseSchema(BaseModel):
    """This is a class representing a grade."""
    id: int
    name: str
    description: Optional[str] = None
    updated_at: datetime
    created_at: datetime

    class Config:
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "name": "Grade 1",
                "description": "This is grade 1",
                "updated_at": "2022-01-01T00:00:00",
                "created_at": "2022-01-01T00:00:00",
            }
        }

class CourseCreateSchema(BaseModel):
    """This is a class representing a grade."""
    name: str
    description: Optional[str] = None
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Grade 1",
                "description": "This is grade 1"
            }
        }

class CourseUpdateSchema(BaseModel):
    """This is a class representing a grade."""
    name: Optional[str] = None
    description: Optional[str] = None
    uptaded_at: Optional[datetime] = datetime.now()

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Grade 1",
                "description": "This is grade 1",

            }
        }