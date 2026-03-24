from fastapi import APIRouter, Depends, HTTPException, status

from .jwt_manager import JwtManager
from ..controllers.auth_controller import AuthController
from ..core.dependencies import get_current_user
from ..schemas.userdata_schema import AuthResponse, AuthUserResponse, UserData

auth_routes = APIRouter()

@auth_routes.post('/login', tags=['Autenticación'], response_model=AuthResponse)
async def signin(user_data: UserData):
    user = AuthController.authenticate_user(user_data.email, user_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales incorrectas",
        )

    token = JwtManager.create_token(user.email, user.id, user.role)
    return AuthResponse(
        access_token=token,
        token_type="bearer",
        user=AuthUserResponse(
            id=user.id,
            email=user.email,
            role=user.role,
            first_name=user.first_name,
            last_name=user.last_name,
        ),
    )


@auth_routes.get('/me', tags=['Autenticación'], response_model=AuthUserResponse)
async def get_profile(current_user=Depends(get_current_user)):
    return AuthUserResponse(
        id=current_user.id,
        email=current_user.email,
        role=current_user.role,
        first_name=current_user.first_name,
        last_name=current_user.last_name,
    )
