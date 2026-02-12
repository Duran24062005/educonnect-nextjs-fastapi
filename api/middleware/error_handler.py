"""
Global error handling middleware.
"""
from fastapi import Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from sqlalchemy.exc import SQLAlchemyError
from ..core.exceptions import BaseAPIException
from ..core.logging_config import logger


async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    """Handle HTTP exceptions."""
    logger.warning(
        f"HTTP {exc.status_code} error on {request.method} {request.url.path}: {exc.detail}"
    )
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": True,
            "message": exc.detail,
            "status_code": exc.status_code,
        },
    )


async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """Handle validation errors."""
    errors = exc.errors()
    logger.warning(
        f"Validation error on {request.method} {request.url.path}: {errors}"
    )
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "error": True,
            "message": "Validation error",
            "details": errors,
            "status_code": status.HTTP_422_UNPROCESSABLE_ENTITY,
        },
    )


async def api_exception_handler(request: Request, exc: BaseAPIException):
    """Handle custom API exceptions."""
    logger.error(
        f"API error on {request.method} {request.url.path}: {exc.detail}",
        exc_info=True,
    )
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": True,
            "message": exc.detail,
            "status_code": exc.status_code,
        },
    )


async def general_exception_handler(request: Request, exc: Exception):
    """Handle unexpected exceptions."""
    logger.exception(
        f"Unexpected error on {request.method} {request.url.path}: {str(exc)}"
    )
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "error": True,
            "message": "Internal server error",
            "status_code": status.HTTP_500_INTERNAL_SERVER_ERROR,
        },
    )
