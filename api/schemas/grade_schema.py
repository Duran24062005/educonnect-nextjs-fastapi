from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Grade(BaseModel):
    """This is a class representing a grade."""
    id: int
    qualification: float
    message: Optional[str]
    updated_at: datetime

    class Config:
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "qualification": 8.7,
                "message": "Should improve a little.",
                "updated_at": "2022-01-01T00:00:00",
            }
        }


class CreateGrade(BaseModel):
    """This is a class representing a grade."""
    id: int
    qualification: float
    message: Optional[str]
    created_at: datetime
    updated_at: datetime
    
    class Config:
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "qualification": 8.7,
                "message": "Should improve a little.",
                "created_at": "2022-01-01T00:00:00",
                "updated_at": "2022-01-01T00:00:00",
            }
        }