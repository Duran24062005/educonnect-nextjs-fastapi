from ..models.posts_model import Post as PostEntity

class PostService():
    def __init__(self, db):
        self.db = db

    def get_posts(self):
        """Get post from database"""
        posts = self.db.query(PostEntity).all()
        if not posts:
            return None
        return posts
    
    def get_post(self, post_id: int):
        """Get post by id"""
        post = self.db.query(PostEntity).filter(PostEntity.id == post_id).first()
        if not post:
            return None
        return post
    
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
        if not post:
            self.db.delete(post)
            self.db.commit()
            self.db.close()
            return True
        return False

