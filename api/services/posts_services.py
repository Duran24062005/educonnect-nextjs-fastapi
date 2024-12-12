from sqlalchemy.orm import joinedload
from ..models.posts_model import Post as PostEntity
from fastapi import UploadFile, HTTPException
import uuid
import os

class PostService():
    def __init__(self, db):
        self.db = db

    def get_posts(self):
        """Get post from database"""
        posts = (
            self.db.query(PostEntity)
            .options(joinedload(PostEntity.teacher))
            .all()
            )
        if not posts:
            return None
        return posts
    
    def get_post(self, post_id: int):
        """Get post by id"""
        post = self.db.query(PostEntity).filter(PostEntity.id == post_id).first()
        if not post:
            return None
        return post
    
    def upload_file(self, post_id: int, file: UploadFile):
        """Upload a file to the database."""
        # Assuming the file is a CSV file containing teacher data
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="Invalid file type")
        UPOLOAD_DIR = "./api/uploads"
        os.makedirs(UPOLOAD_DIR, exist_ok=True)
        unique_filename = f"{uuid.uuid4().hex}_{file.filename}"
        file_path = os.path.join(UPOLOAD_DIR, unique_filename)
        with open(file_path, "wb") as buffer:
            buffer.write(file.file.read())

        return f"http://127.0.0.1:8000/uploads/{unique_filename}"
    
    def create_post(self, post_data):
        """Create post in database"""
        new_post = PostEntity(**post_data.model_dump())
        self.db.add(new_post)
        self.db.commit()
        self.db.refresh(new_post)
        self.db.close()
        return new_post

    def update_post(self, post_id: int, post_data):
        """Update a post in database"""
        post = self.db.query(PostEntity).filter(PostEntity.id == post_id).first()
        if not post:
            return None
        post.update(**post_data.model_dump())
        self.db.commit()
        self.db.refresh(post)
        self.db.close()
        return post
    
    def delete_post(self, post_id):
        """Delete a post from database"""
        post = self.db.query(PostEntity).filter(PostEntity.id == post_id).first()
        if post:
            self.db.delete(post)
            self.db.commit()
            self.db.close()
            return True
        return False
