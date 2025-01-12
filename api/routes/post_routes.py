from fastapi import APIRouter, HTTPException, UploadFile, Form
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from ..controllers.posts_controller import PostController
from ..schemas.post_schema import PostSchema, PostCreateSchema, PostUpdateSchema

post_routes = APIRouter()

@post_routes.get('/', tags=['Posts'])
async def get_posts()->list[PostSchema]:
    posts = PostController.get_posts()
    if posts is not None:
        return JSONResponse(content=jsonable_encoder(posts), status_code=200)
    return JSONResponse(content={"Error": "Posts not founds"}, status_code=400)
    # raise HTTPException(status_code=400, detail="Not found ")

@post_routes.get('/{id}', tags=['Posts'])
async def read_post(id: int)->PostSchema:
    post = PostController.get_post_by_id(id)
    if post is not None:
        return JSONResponse(content=jsonable_encoder(post), status_code=200)
    return JSONResponse(content={"Error": "Post not found"}, status_code=404)

@post_routes.post('/create', tags=['Posts'])
async def create_post(
    title: str = Form(...),
    content: str = Form(...),
    teacher_id: int = Form(...),
    image: UploadFile = Form(None)
    ):
    post = PostController.create_post(title, content, teacher_id, image)
    if post is not None:
        return JSONResponse(content=jsonable_encoder(post), status_code=201)
    return JSONResponse(content={"Error": "server error"}, status_code=200)

@post_routes.put('/', tags=['Posts'])
async def update_post(id: int, post:PostUpdateSchema)->PostUpdateSchema:
    return JSONResponse(content={"message": "Post updated successfully"}, status_code=200)

@post_routes.delete('/', tags=['Posts'])
async def delete_post(id: int):
    deleted = PostController.delete_post(id)
    return JSONResponse(content=deleted, status_code=200)

