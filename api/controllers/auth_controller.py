from ..config.database import Session
from ..services.auth_service import AuthService


class AuthController:
    @staticmethod
    def authenticate_user(email: str, password: str):
        with Session() as db:
            return AuthService(db).authenticate_user(email, password)
