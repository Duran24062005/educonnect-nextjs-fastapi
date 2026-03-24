from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, date

from .course_schema import CourseSchema


class StudentSchema(BaseModel):
    id: int
    first_name: str
    last_name: str
    birth_date: Optional[date] = None
    course_id: Optional[int] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    imageUrl: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    course: Optional[CourseSchema] = None

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "1990-01-01",
                "course_id": 5,
                "email": "john@example.com",
                "phone": "3054678904",
                "imageUrl": "https://example.com/image.jpg",
                "created_at": "2022-01-01 00:00:00",
                "updated_at": "2020-01-01 00:00:00",
                "course": {
                    "id": 1,
                    "name": "Math",
                    "description": "Base course",
                    "created_at": "2020-01-01T00:00:00",
                    "updated_at": "2020-01-01T00:00:00"
                }
            }
        }


class CreateStudent(BaseModel):
    first_name: str
    last_name: str
    birth_date: Optional[date] = None
    course_id: Optional[int] = None
    email: EmailStr
    phone: str
    password: str
    imageUrl: Optional[str] = None

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "1990-01-01",
                "course_id": 5,
                "email": "john@example.com",
                "phone": "3054678904",
                "password": "password123",
                "imageUrl": "https://images.unsplash.com/photo-1725867253101-a78ead1ce5e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        }


class UpdateStudent(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    birth_date: Optional[date] = None
    course_id: Optional[int] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    password: Optional[str] = None
    imageUrl: Optional[str] = None
