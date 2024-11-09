from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Father(BaseModel):
    """This is a class representing a father."""
    id: int
    firts_name: str
    last_name: str
    birth_date: Optional[datetime] = None
    email: str
    phone: str
    password: str
    imageUrl: str
    updated_at: datetime

    class Confing():
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "firts_name": "John",
                "last_name": "Doe",
                "birth_date": "2020-01-01",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "password": "password123",
                "imageUrl": "https://example.com/image.jpg",
                "updated_at": "2020-01-01 00:00:00"
            }
        }

class CreateFather(BaseModel):
    """This is a class representing a father."""
    id: int
    firts_name: str
    last_name: str
    birth_date: Optional[datetime] = None
    email: str
    phone: str
    password: str
    imageUrl: str
    created_at: datetime
    updated_at: datetime

    class Confing():
        orm_mode = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "firts_name": "John",
                "last_name": "Doe",
                "birth_date": "2020-01-01",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "password": "password123",
                "imageUrl": "https://example.com/image.jpg",
                "created_at": "2020-01-01 00:00:00",
                "updated_at": "2020-01-01 00:00:00"
            }
        }