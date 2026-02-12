"""
JWT token management utilities.
"""
import jwt
from datetime import datetime, timedelta
from fastapi import HTTPException, status

from ..core.config import settings
from ..core.logging_config import logger


class JwtManager:
    """JWT token manager for authentication."""

    @staticmethod
    def create_token(user: str) -> dict:
        """
        Create a JWT token for a user.
        
        Args:
            user: User identifier (email or username)
            
        Returns:
            Dictionary with access_token and token_type
        """
        expiration = datetime.utcnow() + timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
        )
        payload = {
            "sub": user,
            "exp": expiration,
            "iat": datetime.utcnow(),
        }
        token = jwt.encode(
            payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM
        )
        logger.info(f"Token created for user: {user}")
        return {"access_token": token, "token_type": "bearer"}

    @staticmethod
    def verify_token(token: str) -> dict:
        """
        Verify and decode a JWT token.
        
        Args:
            token: JWT token string
            
        Returns:
            Decoded token payload
            
        Raises:
            HTTPException: If token is invalid or expired
        """
        try:
            payload = jwt.decode(
                token,
                settings.SECRET_KEY,
                algorithms=[settings.ALGORITHM],
            )
            return payload
        except jwt.ExpiredSignatureError:
            logger.warning("Token has expired")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token has expired",
            )
        except jwt.InvalidTokenError as e:
            logger.warning(f"Invalid token: {e}")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token",
            )
