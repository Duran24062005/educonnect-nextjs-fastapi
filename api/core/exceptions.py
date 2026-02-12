"""
Custom exceptions for the application.
"""
from fastapi import HTTPException, status


class BaseAPIException(HTTPException):
    """Base exception class for API errors."""
    
    def __init__(
        self,
        status_code: int,
        detail: str,
        headers: dict = None,
    ):
        super().__init__(status_code=status_code, detail=detail, headers=headers)


class NotFoundError(BaseAPIException):
    """Resource not found exception."""
    
    def __init__(self, resource: str, identifier: str = None):
        message = f"{resource} not found"
        if identifier:
            message += f" with id: {identifier}"
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=message,
        )


class ValidationError(BaseAPIException):
    """Validation error exception."""
    
    def __init__(self, detail: str):
        super().__init__(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=detail,
        )


class UnauthorizedError(BaseAPIException):
    """Unauthorized access exception."""
    
    def __init__(self, detail: str = "Unauthorized"):
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=detail,
        )


class ForbiddenError(BaseAPIException):
    """Forbidden access exception."""
    
    def __init__(self, detail: str = "Forbidden"):
        super().__init__(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=detail,
        )


class ConflictError(BaseAPIException):
    """Resource conflict exception."""
    
    def __init__(self, detail: str):
        super().__init__(
            status_code=status.HTTP_409_CONFLICT,
            detail=detail,
        )


class InternalServerError(BaseAPIException):
    """Internal server error exception."""
    
    def __init__(self, detail: str = "Internal server error"):
        super().__init__(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=detail,
        )
