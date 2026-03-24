import hashlib
import hmac
import os
from datetime import UTC, datetime, timedelta
from typing import Any

import jwt
from fastapi import HTTPException, status

from .config import get_settings


PASSWORD_SCHEME = "pbkdf2_sha256"
PASSWORD_ITERATIONS = 100_000


def hash_password(password: str) -> str:
    salt = os.urandom(16).hex()
    derived_key = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt.encode("utf-8"),
        PASSWORD_ITERATIONS,
    ).hex()
    return f"{PASSWORD_SCHEME}${salt}${derived_key}"


def is_password_hashed(password: str | None) -> bool:
    if not password:
        return False

    parts = password.split("$")
    return len(parts) == 3 and parts[0] == PASSWORD_SCHEME


def verify_password(plain_password: str, stored_password: str | None) -> bool:
    if not stored_password:
        return False

    if not is_password_hashed(stored_password):
        return hmac.compare_digest(plain_password, stored_password)

    _, salt, stored_hash = stored_password.split("$", maxsplit=2)
    calculated_hash = hashlib.pbkdf2_hmac(
        "sha256",
        plain_password.encode("utf-8"),
        salt.encode("utf-8"),
        PASSWORD_ITERATIONS,
    ).hex()
    return hmac.compare_digest(calculated_hash, stored_hash)


def create_access_token(subject: str, user_id: int, role: str) -> str:
    settings = get_settings()
    expires_at = datetime.now(UTC) + timedelta(minutes=settings.jwt_expiration_minutes)
    payload = {
        "sub": subject,
        "user_id": user_id,
        "role": role,
        "exp": expires_at,
    }
    return jwt.encode(
        payload,
        settings.jwt_secret_key,
        algorithm=settings.jwt_algorithm,
    )


def decode_access_token(token: str) -> dict[str, Any]:
    settings = get_settings()

    try:
        return jwt.decode(
            token,
            settings.jwt_secret_key,
            algorithms=[settings.jwt_algorithm],
        )
    except jwt.ExpiredSignatureError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expirado",
        ) from exc
    except jwt.InvalidTokenError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalido",
        ) from exc
