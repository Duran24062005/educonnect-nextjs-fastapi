from pydantic import BaseModel
from datetime import datetime
from typing import Optional

# Esquema para leer datos de un Post
class PostSchema(BaseModel):
    id: int
    title: str
    content: str
    imageUrl: str
    created_at: datetime
    updated_at: datetime
    teacher: list

    class Config:
        from_attribute = True  # Esto permite que Pydantic trabaje con objetos de SQLAlchemy

# Esquema para crear un nuevo Post
class PostCreateSchema(BaseModel):
    title: str
    content: str
    imageUrl: str
    teacher_id: int

# Esquema para actualizar un Post
class PostUpdateSchema(BaseModel):
    title: Optional[str]
    content: Optional[str]
    imageUrl: Optional[str]
    updated_at: Optional[datetime] = datetime.now()