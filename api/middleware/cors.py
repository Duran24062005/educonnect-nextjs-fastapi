"""
CORS middleware configuration.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ..core.config import settings
from ..core.logging_config import logger


def setup_cors(app: FastAPI) -> None:
    """
    Configure CORS middleware for the FastAPI application.
    
    Uses environment variables for allowed origins to ensure security.
    """
    if settings.ENVIRONMENT == "development":
        logger.warning(
            "CORS is configured for development. "
            "Make sure to set CORS_ORIGINS in production!"
        )
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=settings.CORS_ALLOW_CREDENTIALS,
        allow_methods=settings.CORS_ALLOW_METHODS,
        allow_headers=settings.CORS_ALLOW_HEADERS,
    )
    
    logger.info(f"CORS configured with origins: {settings.CORS_ORIGINS}")
    