from ..config.database import Base
from sqlalchemy import Column, Integer, String, Date, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime


class FileTeacher(Base):
    __tablename__ = 'files_teachers'

    id = Column(Integer, primary_key=True,autoincrement=True)
    owner_id = Column(Integer, ForeignKey('teachers.id'), nullable=False)
    owner = relationship('teachers', back_populates='files_teachers')
    route = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())


class FileFather(Base):
    __tablename__ = 'files_fathers'

    id = Column(Integer, primary_key=True,autoincrement=True)
    owner_id = Column(Integer, ForeignKey('teachers.id'), nullable=False)
    owner = relationship('teachers', back_populates='files_teachers')
    route = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())


class FileStudent(Base):
    __tablename__ = 'files_students'

    id = Column(Integer, primary_key=True,autoincrement=True)
    owner_id = Column(Integer, ForeignKey('teachers.id'), nullable=False)
    owner = relationship('teachers', back_populates='files_teachers')
    route = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())

class FilePost(Base):
    __tablename__ = 'files_posts'

    id = Column(Integer, primary_key=True,autoincrement=True)
    owner_id = Column(Integer, ForeignKey('teachers.id'), nullable=False)
    owner = relationship('teachers', back_populates='files_teachers')
    route = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())