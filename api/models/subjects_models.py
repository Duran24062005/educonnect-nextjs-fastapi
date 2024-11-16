from ..config.database import Base
from sqlalchemy import Column, String, Integer, Float, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

class Subjects(Base):
    __tablename__ = 'subjects'

    id = Column(Integer, primary_key=True)
    name = Column(Float, nullable=False)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), nullable=False, onupdate=datetime.now())