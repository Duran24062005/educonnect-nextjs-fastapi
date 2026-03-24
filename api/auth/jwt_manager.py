from ..core.security import create_access_token, decode_access_token


class JwtManager:
    @classmethod
    def create_token(cls, user: str, user_id: int, role: str):
        return create_access_token(subject=user, user_id=user_id, role=role)

    @classmethod
    def verify_token(cls, token: str):
        return decode_access_token(token)
