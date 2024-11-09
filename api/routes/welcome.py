from fastapi import APIRouter

welcome_route = APIRouter()


@welcome_route.get("/api/py/helloFastApi", tags=['welcome'])
def hello_fast_api():
    return {"message": "Hello from FastAPI"}

@welcome_route.get('/welcome', tags=['welcome'])
async def welcome():
    return {"message": "Welcome to the API!"}

@welcome_route.get('/home', tags=['welcome'])
async def home():
    return {"message": "Welcome to the home page!"}