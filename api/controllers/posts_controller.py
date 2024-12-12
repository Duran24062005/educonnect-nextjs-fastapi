from sqlalchemy.exc import SQLAlchemyError
from ..schemas.post_schema import PostSchema
from ..services.posts_services import PostService
from ..config.database import Session


class PostController:
    # def __init__(self):
    #     self.session = Session()

    def get_posts()->list[PostSchema]:
        """Get all Posts from the database.
        Returns:
        list[Teacher]: A list of all post.
        """
        try:
            with Session() as db:
                posts = PostService(db).get_posts()
                if posts is not None:
                    posts.reverse()
                    return posts
        except SQLAlchemyError as e:
            print(f"Error fetching posts: {e}")
            return None
        
    
    def get_post_by_id(id: int)->PostSchema:
        """Get post by id from database"""
        with Session() as db:
            post = PostService(db).get_post(id)
            if not post:
                return None
            return post
        
    def create_post(data):
        """Create a new post in the database"""
        try:
            with Session() as db:
                post = PostService(db).create_post(data)
                return post
        except SQLAlchemyError as e:
            print(f"Error creating post: {e}")
            return None
        
    def update_post(id: int, post_data):
        try:
            with Session() as db:
                return PostService(db).update_post(id, post_data)
        except SQLAlchemyError as e:
            print(f"{e}")
            return None

    def delete_post(id: int):
        try:
            with Session() as db:
                deleted_post = PostService(db).delete_post(id)
                if deleted_post:
                    return {"Message": "Post deleted succssefully"}
                else:
                    return {"Message": "Post not found"}
        except SQLAlchemyError as e:
            print(f"{e}")
            return None
        
