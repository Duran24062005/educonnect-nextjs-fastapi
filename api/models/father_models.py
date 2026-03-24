from ..config.database import Base
from sqlalchemy import Column, Integer, String, Date, DateTime
from datetime import datetime

class Father(Base):
    __tablename__ = 'fathers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    birth_date = Column(Date, nullable=True)
    email = Column(String(50), nullable=False)
    phone = Column(String(13), nullable=False)
    password = Column("Password", String(255), nullable=False)
    imageUrl = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now(), nullable=False)
