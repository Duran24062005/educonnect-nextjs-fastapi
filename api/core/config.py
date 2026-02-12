"""
Configuration management using pydantic-settings for type-safe environment variables.
"""
import os
from pathlib import Path
from typing import List, Optional
from pydantic_settings import BaseSettings
from pydantic import Field, validator


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    # Application
    APP_NAME: str = "EduConnect API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = Field(default=False, env="DEBUG")
    ENVIRONMENT: str = Field(default="development", env="ENVIRONMENT")
    
    # API
    API_V1_PREFIX: str = "/api/v1"
    DOCS_URL: str = "/api/py/docs"
    OPENAPI_URL: str = "/api/py/openapi.json"
    
    # Database
    DATABASE_URL: str = Field(
        default="sqlite:///./api/educonnect_db.sqlite",
        env="DATABASE_URL"
    )
    DB_ECHO: bool = Field(default=False, env="DB_ECHO")
    
    # CORS
    CORS_ORIGINS: List[str] = Field(
        default=["http://localhost:3000", "http://127.0.0.1:3000"],
        env="CORS_ORIGINS"
    )
    CORS_ALLOW_CREDENTIALS: bool = True
    CORS_ALLOW_METHODS: List[str] = ["*"]
    CORS_ALLOW_HEADERS: List[str] = ["*"]
    
    # JWT
    SECRET_KEY: str = Field(
        default="your-secret-key-change-in-production",
        env="SECRET_KEY"
    )
    ALGORITHM: str = Field(default="HS256", env="ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(default=60, env="ACCESS_TOKEN_EXPIRE_MINUTES")
    
    # File Upload
    UPLOAD_DIR: Path = Field(default=Path("./api/uploads"), env="UPLOAD_DIR")
    MAX_UPLOAD_SIZE: int = Field(default=5 * 1024 * 1024, env="MAX_UPLOAD_SIZE")  # 5MB
    ALLOWED_EXTENSIONS: List[str] = ["image/jpeg", "image/jpg", "image/png", "image/gif"]
    
    # Email
    SMTP_HOST: str = Field(default="smtp.gmail.com", env="SMTP_HOST")
    SMTP_PORT: int = Field(default=587, env="SMTP_PORT")
    SMTP_USER: Optional[str] = Field(default=None, env="SMTP_USER")
    SMTP_PASSWORD: Optional[str] = Field(default=None, env="SMTP_PASSWORD")
    FRONTEND_URL: str = Field(
        default="http://localhost:3000",
        env="FRONTEND_URL"
    )
    
    # Logging
    LOG_LEVEL: str = Field(default="INFO", env="LOG_LEVEL")
    
    @validator("CORS_ORIGINS", pre=True)
    def parse_cors_origins(cls, v):
        if isinstance(v, str):
            return [origin.strip() for origin in v.split(",")]
        return v
    
    @validator("UPLOAD_DIR", pre=True)
    def create_upload_dir(cls, v):
        upload_path = Path(v)
        upload_path.mkdir(parents=True, exist_ok=True)
        return upload_path
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


# Create a singleton instance
settings = Settings()
