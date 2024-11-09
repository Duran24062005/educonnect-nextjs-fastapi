from fastapi import APIRouter
from fastapi.responses import JSONResponse
from ..schemas.grade_schema import Grade as GradeEntity
from ..data.grades import Grades_table

grades_routes = APIRouter()


@grades_routes.get('/', tags=['Grades'], response_model=list[GradeEntity])
async def get_gardes() -> list[GradeEntity]:
    return JSONResponse(content=Grades_table, status_code=200)

@grades_routes.get('/{id}', tags=['Grades'])
async def get_grade(id: int) -> JSONResponse:
    return JSONResponse(content={"id": id}, status_code=200)

@grades_routes.post('/', tags=['Grades'])
async def create_grade(grade: GradeEntity) -> JSONResponse:
    return JSONResponse(content={"message": "Father created"}, status_code=201)

@grades_routes.put('/{id}', tags=['Grades'])
async def update_grade(id: int, grade: GradeEntity) -> JSONResponse:
    return JSONResponse(content={"message": "Father updated"}, status_code=200)

@grades_routes.delete('/', tags=['Grades'])
async def delete_grade(id: int) -> JSONResponse:
    return JSONResponse(content={"message": "Father deleted"}, status_code=200)