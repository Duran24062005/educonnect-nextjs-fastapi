from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, date


class FatherSchema(BaseModel):
    id: int
    first_name: str
    last_name: str
    birth_date: Optional[date] = None
    email: EmailStr
    phone: str
    imageUrl: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "birth_date": "2020-01-01",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "imageUrl": "https://example.com/image.jpg",
                "created_at": "2020-01-01 00:00:00",
                "updated_at": "2020-01-01 00:00:00"
            }
        }


class CreateFather(BaseModel):
    first_name: str
    last_name: str
    birth_date: Optional[date] = None
    email: EmailStr
    phone: str
    password: str
    imageUrl: Optional[str] = None


class UpdateFather(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    birth_date: Optional[date] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    password: Optional[str] = None
    imageUrl: Optional[str] = None
