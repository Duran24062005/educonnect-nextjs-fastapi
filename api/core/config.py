import os
from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    jwt_secret_key: str = "educonnect-dev-secret-change-me"
    jwt_algorithm: str = "HS256"
    jwt_expiration_minutes: int = 60
    domain: str = "http://127.0.0.1:8000"
    environment: str = "development"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    @property
    def normalized_domain(self) -> str:
        return self.domain.rstrip("/")


@lru_cache
def get_settings() -> Settings:
    secret_key = os.getenv("JWT_SECRET_KEY") or os.getenv("SECRET_KEY")
    domain = os.getenv("DOMAIN") or "http://127.0.0.1:8000"
    environment = os.getenv("ENVIRONMENT") or os.getenv("NODE_ENV") or "development"

    return Settings(
        jwt_secret_key=secret_key or "educonnect-dev-secret-change-me",
        domain=domain,
        environment=environment,
    )
