from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Student(BaseModel):
    """This is a class representing a student."""
    id: int
    first_name: str
    last_name: str
    birth_date: Optional[datetime] = None
    course_id: int
    email: str
    phone: str
    password: str
    imageUrl: str
    created_at: datetime
    updated_at: datetime
    course: list

    class Config():
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "1990-01-01",
                "course_id": 5,
                "email": "john@example.com",
                "phone": "1234567890",
                "password": "password123",
                "imageUrl": "https://example.com/image.jpg",
                "created_at": "2022-01-01 00:00:00",
                "updated_at": "2020-01-01 00:00:00",
                "course": {
                    "id": 1,
                    "name": "Math"
                }
            }
        }

class CreateStudent(BaseModel):
    """This is a class representing a student."""
    first_name: str
    last_name: str
    birth_date: Optional[datetime] = None
    course_id: int
    email: str
    phone: str
    password: str
    imageUrl: str

    class Config():
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "1990-01-01",
                "course_id": 5,
                "email": "john@example.com",
                "phone": "1234567890",
                "password": "password123",
                "imageUrl": "https://images.unsplash.com/photo-1725867253101-a78ead1ce5e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        }