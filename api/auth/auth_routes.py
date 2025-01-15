# from fastapi import APIRouter
# from ..auth.jwt_manager import JwtManager
# from ..schemas.userdata_schema import UserData
# from ..controllers.auth_controller import AuthController


# auth_routes = APIRouter()


# @auth_routes.get('/log', tags=['Outh'])
# async def create_token(user: str):
#     return await JwtManager.create_token(user)


# @auth_routes.post('/login', tags=['Outh'])
# async def singin(user_data: UserData):
#     return {
#         "user email": user_data.email,
#         "user password": user_data.password
#     }

from fastapi import APIRouter, Depends, HTTPException
from .jwt_manager import JwtManager
from ..schemas.userdata_schema import UserData
from ..controllers.auth_controller import AuthController

auth_routes = APIRouter()

@auth_routes.post('/login', tags=['Autenticación'])
async def signin(user_data: UserData):
    user = await AuthController.authenticate_user(user_data.email, user_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")
    token = await JwtManager.create_token(user.email)
    return {"access_token": token, "token_type": "bearer"}

@auth_routes.get('/log', tags=['Autenticación'])
async def create_token(user: str):
    return await JwtManager.create_token(user)