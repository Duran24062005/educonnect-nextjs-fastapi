from typing import Literal

from pydantic import BaseModel, EmailStr, Field


class UserData(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)

    class Config:
        json_schema_extra = {
            "example": {
                "email": "jhondoe@educonnect.com",
                "password": "hxk65d#",
            }
        }


class AuthUserResponse(BaseModel):
    id: int
    email: EmailStr
    role: Literal["teacher", "student", "father"]
    first_name: str
    last_name: str


class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: AuthUserResponse
