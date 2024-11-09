from pydantic import BaseModel, EmailStr
from datetime import datetime, date
from typing import Optional, List
from .post_schema import PostSchema


# Esquema para leer datos de un Teacher
class TeacherSchema(BaseModel):
    id: int
    first_name: str
    last_name: str
    birth_date: Optional[date]
    email: EmailStr
    phone: str
    imageUrl: Optional[str]
    created_at: datetime
    updated_at: datetime
    posts: List[PostSchema] = []  # Relación de posts

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John Jhosep",
                "last_name": "Doe",
                "birth_date": "1990-01-01T00:00:00",
                "email": "john@example.com",
                "phone": "1234567890",
                "imageUrl": "https://example.com/image.jpg",
                "created_at": "2022-01-01T00:00:00",
                "updated_at": "2022-01-01T00:00:00",
                "posts": [
                    {
                        "id": 1,
                        "title": "Post Title",
                        "content": "Content of the post",
                        "imageUrl": "https://example.com/post_image.jpg",
                        "created_at": "2022-01-01T00:00:00",
                        "updated_at": "2022-01-01T00:00:00"
                    }
                ]
            }
        }

# Esquema para crear un nuevo Teacher
class TeacherCreateSchema(BaseModel):
    first_name: str
    last_name: str
    birth_date: Optional[date]
    email: EmailStr
    phone: str
    password: str
    imageUrl: Optional[str]

    class Config:
        json_schema_extra = {
            "example": {
                "first_name": "John Jhosep",
                "last_name": "Doe",
                "birth_date": "1990-01-01T00:00:00",
                "email": "john@example.com",
                "phone": "1234567890",
                "password": "123456",
                "imageUrl": "https://example.com/image.jpg"
            }
        }

# Esquema para actualizar un Teacher
class TeacherUpdateSchema(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    birth_date: Optional[date]
    email: Optional[EmailStr]
    phone: Optional[str]
    password: Optional[str]
    imageUrl: Optional[str]
    updated_at: Optional[datetime] = datetime.now()

    class Config:
        json_schema_extra = {
            "example": {
                "first_name": "John Jhosep",
                "last_name": "Doe",
                "birth_date": "1990-01-01T00:00:00",
                "email": "john@example.com",
                "phone": "1234567890",
                "password": "123456",
                "imageUrl": "https://example.com/image.jpg"
            }
        }
