from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ..controllers.fathers_controller import FatherController
from ..schemas.father_schema import CreateFather, FatherSchema, UpdateFather

fathers_routes = APIRouter()

@fathers_routes.get('/', tags=['Fathers'], response_model=list[FatherSchema])
async def get_fathers() -> list[FatherSchema]:
    resp = FatherController.get_fathers()
    return JSONResponse(content=jsonable_encoder(resp), status_code=200)

@fathers_routes.get('/{id}', tags=['Fathers'], response_model=FatherSchema)
async def get_father(id: int) -> JSONResponse:
    father = FatherController.get_father(id)
    if father is None:
        return JSONResponse(content={"message": "Father not found"}, status_code=404)
    return JSONResponse(content=jsonable_encoder(father), status_code=200)

@fathers_routes.post('/', tags=['Fathers'], response_model=FatherSchema)
async def create_father(father: CreateFather) -> JSONResponse:
    created = FatherController.create_father(father)
    return JSONResponse(content=jsonable_encoder(created), status_code=201)

@fathers_routes.put('/', tags=['Fathers'])
async def update_father(id: int, father: UpdateFather) -> JSONResponse:
    updated = FatherController.update_father(id, father)
    if updated is None:
        return JSONResponse(content={"message": "Father not found"}, status_code=404)
    return JSONResponse(content=jsonable_encoder(updated), status_code=200)

@fathers_routes.delete('/', tags=['Fathers'])
async def delete_father(id: int) -> JSONResponse:
    deleted = FatherController.delete_father(id)
    if deleted is None:
        return JSONResponse(content={"message": "Father not found"}, status_code=404)
    return JSONResponse(content=deleted, status_code=200)
