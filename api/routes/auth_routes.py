from fastapi import APIRouter
from ..auth.jwt_manager import JwtManager


auth_routes = APIRouter()


@auth_routes.get('/log', tags=['Outh'])
async def create_token(user: str):
    return await JwtManager.create_token(user)


@auth_routes.post('/login', tags=['Outh'])
async def decode_token(token: str):
    return await JwtManager.decode_token(token)
