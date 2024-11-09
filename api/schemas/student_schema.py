from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Student(BaseModel):
    """This is a class representing a student."""
    id: int
    first_name: str
    last_name: str
    birth_date: Optional[datetime] = None
    email: str
    phone: str
    password: str
    imageUrl: str
    updated_at: datetime

    class Config():
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "1990-01-01",
                "email": "john@example.com",
                "phone": "1234567890",
                "password": "password123",
                "imageUrl": "https://example.com/image.jpg",
                "updated_at": "2020-01-01 00:00:00"
            }
        }

class CreateStudent(BaseModel):
    """This is a class representing a student."""
    id: int
    first_name: str
    last_name: str
    birth_date: Optional[datetime] = None
    email: str
    phone: str
    password: str
    imageUrl: str
    creared_at: datetime
    updated_at: datetime

    class Config():
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "1990-01-01",
                "email": "john@example.com",
                "phone": "1234567890",
                "password": "password123",
                "imageUrl": "https://images.unsplash.com/photo-1725867253101-a78ead1ce5e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "creared_at": "2020-01-01 00:00:00",
                "updated_at": "2020-01-01 00:00:00"
            }
        }