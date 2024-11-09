from fastapi import APIRouter
from fastapi.responses import JSONResponse
from ..schemas.student_schema import Student as StudentEntity
from ..data.students import Students_table

students_routes = APIRouter()

@students_routes.get("/", tags=["Students"], response_model=list[StudentEntity])
async def get_teacher()-> list[StudentEntity]:
    return JSONResponse(content=Students_table)

@students_routes.get('/{id}', tags=['Students'], response_model=StudentEntity)
async def get_teacher(id:int)-> StudentEntity:
    return JSONResponse(content={"id": id}, status_code=200)

@students_routes.post('/', tags=['Students'], response_model=list[StudentEntity])
async def create_teacher(student: StudentEntity)->StudentEntity:
    return JSONResponse(content={"message": "Father created"}, status_code=201)

@students_routes.put('/', tags=['Students'])
async def update_father(id: int,student: StudentEntity) -> JSONResponse:
    return JSONResponse(content={"message": "Father updated"}, status_code=200)

@students_routes.delete('/', tags=['Students'])
async def delete_father(id: int) -> JSONResponse:
    return JSONResponse(content={"message": "Father deleted"}, status_code=200)