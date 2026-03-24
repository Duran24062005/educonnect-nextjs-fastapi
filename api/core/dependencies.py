from typing import Generator

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from ..config.database import Session
from ..repositories.auth_repository import AuthRepository
from .security import decode_access_token


bearer_scheme = HTTPBearer(auto_error=False)


def get_db() -> Generator:
    db = Session()
    try:
        yield db
    finally:
        db.close()


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
    db=Depends(get_db),
):
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Se requiere un token de autenticacion",
        )

    payload = decode_access_token(credentials.credentials)
    email = payload.get("sub")
    role = payload.get("role")

    if not email or not role:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalido",
        )

    repository = AuthRepository(db)
    auth_user = repository.get_by_role_and_email(role=role, email=email)
    if auth_user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuario no encontrado",
        )

    return auth_user
