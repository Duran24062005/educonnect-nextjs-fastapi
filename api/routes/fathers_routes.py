from fastapi import APIRouter
from fastapi.responses import JSONResponse
from ..schemas.father_schema import Father as FatherEntity
from ..data.fathers import Fathers_table
from ..controllers.fathers_controller import FatherController

fathers_routes = APIRouter()

@fathers_routes.get('/', tags=['Fathers'], response_model=list[FatherEntity])
async def get_fathers() -> list[FatherEntity]:
    resp = await FatherController.get_teachers()
    return JSONResponse(content=resp, status_code=200)

@fathers_routes.get('/{id}', tags=['Fathers'])
async def get_father(id: int) -> JSONResponse:
    return JSONResponse(content={"id": id}, status_code=200)

@fathers_routes.post('/', tags=['Fathers'])
async def create_father(father: FatherEntity) -> JSONResponse:
    return JSONResponse(content={"message": "Father created"}, status_code=201)

@fathers_routes.put('/', tags=['Fathers'])
async def update_father(id: int, father: FatherEntity) -> JSONResponse:
    return JSONResponse(content={"message": "Father updated"}, status_code=200)

@fathers_routes.delete('/', tags=['Fathers'])
async def delete_father(id: int) -> JSONResponse:
    return JSONResponse(content={"message": "Father deleted"}, status_code=200)
