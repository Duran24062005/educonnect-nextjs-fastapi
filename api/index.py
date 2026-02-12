"""
Main FastAPI application entry point.
"""
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from .core.config import settings
from .core.logging_config import logger
from .core.exceptions import BaseAPIException
from .middleware.cors import setup_cors
from .middleware.error_handler import (
    http_exception_handler,
    validation_exception_handler,
    api_exception_handler,
    general_exception_handler,
)
from .config.database import Base, engine
from .routes.welcome import welcome_route
from .routes.post_routes import post_routes
from .routes.teachers_routes import teacher_routes
from .routes.fathers_routes import fathers_routes
from .routes.students_routes import students_routes
from .routes.course_routes import course_routes
from .routes.grades_routes import grades_routes
# from .auth.auth_routes import auth_routes

# Create FastAPI instance
app = FastAPI(
    title=settings.APP_NAME,
    description="Backend API for the EduConnect application",
    version=settings.APP_VERSION,
    docs_url=settings.DOCS_URL,
    openapi_url=settings.OPENAPI_URL,
    debug=settings.DEBUG,
)

# Setup CORS
setup_cors(app)

# Register exception handlers
app.add_exception_handler(StarletteHTTPException, http_exception_handler)
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(BaseAPIException, api_exception_handler)
app.add_exception_handler(Exception, general_exception_handler)

# Mount static files for uploads
app.mount("/uploads", StaticFiles(directory=str(settings.UPLOAD_DIR)), name="uploads")

# Include routers
# app.include_router(auth_routes, prefix=f"{settings.API_V1_PREFIX}/auth", tags=["Authentication"])
app.include_router(welcome_route, prefix="/welcome", tags=["Welcome"])
app.include_router(post_routes, prefix="/posts", tags=["Posts"])
app.include_router(teacher_routes, prefix="/teachers", tags=["Teachers"])
app.include_router(fathers_routes, prefix="/fathers", tags=["Fathers"])
app.include_router(students_routes, prefix="/students", tags=["Students"])
app.include_router(course_routes, prefix="/courses", tags=["Courses"])
app.include_router(grades_routes, prefix="/grades", tags=["Grades"])


@app.on_event("startup")
async def startup_event():
    """Initialize database tables on startup."""
    logger.info("Starting up EduConnect API...")
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables initialized")


@app.on_event("shutdown")
async def shutdown_event():
    """Cleanup on shutdown."""
    logger.info("Shutting down EduConnect API...")


@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT,
    }