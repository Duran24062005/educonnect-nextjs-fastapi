# import jwt
# import datetime


# secret_key  = "mi_llave_secreta"
# algorithm = "HS256"

# class JwtManager:

    
#     def create_token(user):
#         data = {
#             "username": user,
#             "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=15)
#         }
#         return jwt.encode(data, secret_key, algorithm=algorithm)
    
    
#     def decode_token(token):
#         try:
#             return jwt.decode(
#                 token,
#                 secret_key,
#                 algorithms=[algorithm],
#                 options={"verify_exp": True},
#                 leeway=10  # Permite una tolerancia de 10 segundos
#                 )
#         except jwt.ExpiredSignatureError:
#             return {"error": "Token has expired"}

# print(datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=15))


import jwt
from fastapi import HTTPException, status
from datetime import datetime, timedelta
# from app.config import SECRET_KEY, ALGORITHM

class JwtManager:

    @classmethod
    def create_token(cls, user: str):
        expiration = datetime.now() + timedelta(hours=1)
        token = cls.jwt.encode({"sub": user, "exp": expiration}, cls.SECRET_KEY, algorithm=cls.ALGORITHM)
        return {"access_token": token, "token_type": "bearer"}

    @classmethod
    def verify_token(cls, token: str):
        try:
            payload = cls.jwt.decode(token, cls.SECRET_KEY, algorithms=[cls.ALGORITHM])
            return payload
        except jwt.ExpiredSignatureError:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token has expired")
        except jwt.InvalidTokenError:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")