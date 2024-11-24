import jwt
import datetime


secret_key  = "mi_llave_secreta"
algorithm = "HS256"

class JwtManager:

    
    def create_token(user):
        data = {
            "username": user,
            "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=15)
        }
        return jwt.encode(data, secret_key, algorithm=algorithm)
    
    
    def decode_token(token):
        try:
            return jwt.decode(
                token,
                secret_key,
                algorithms=[algorithm],
                options={"verify_exp": True},
                leeway=10  # Permite una tolerancia de 10 segundos
                )
        except jwt.ExpiredSignatureError:
            return {"error": "Token has expired"}

print(datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=15))