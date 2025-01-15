import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from .middleware.cors import app_cors
from .routes.welcome import welcome_route
from .routes.post_routes import post_routes
from .routes.teachers_routes import teacher_routes
from .routes.fathers_routes import fathers_routes
from .routes.students_routes import students_routes
from .routes.course_routes import course_routes
from .routes.grades_routes import grades_routes
from .config.database import Base, engine
# from .auth.auth_routes import auth_routes
from dotenv import load_dotenv

# UPOLOAD_DIR = "/uploads"
# os.makedirs(UPOLOAD_DIR, exist_ok=True)

# Cargar las variables de entorno
load_dotenv()

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")
app.title = "⚙️FastAPI EduConnect🌐"
app.description = "This is a Backend in FastAPI for the EduConnect application"
app.version = "1.0.0"

app_cors(app) 

# Monta la carpeta de uploads para servir las imágenes públicamente
app.mount("/uploads", StaticFiles(directory="./api/uploads"), name="uploads")

# app.include_router(auth_routes, prefix="/auth")
app.include_router(welcome_route, prefix="/welcome")
app.include_router(post_routes, prefix="/posts")
app.include_router(teacher_routes, prefix="/teachers")
app.include_router(fathers_routes, prefix="/fathers")
app.include_router(students_routes, prefix="/students")
app.include_router(course_routes, prefix="/courses")
app.include_router(grades_routes, prefix="/grades")

Base.metadata.create_all(bind=engine)