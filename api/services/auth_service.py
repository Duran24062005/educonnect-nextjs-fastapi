from sqlalchemy.orm import Session

from ..core.security import hash_password, is_password_hashed, verify_password
from ..repositories.auth_repository import AuthRepository


class AuthService:
    def __init__(self, db: Session)->None:
        self.db = db
        self.repository = AuthRepository(db)

    def authenticate_user(self, email: str, password: str):
        auth_user = self.repository.find_by_email(email)
        if auth_user is None:
            return None

        if not verify_password(password, auth_user.password):
            return None

        if not is_password_hashed(auth_user.password):
            self.repository.persist_password(auth_user, hash_password(password))
            auth_user = self.repository.find_by_email(email)

        return auth_user
