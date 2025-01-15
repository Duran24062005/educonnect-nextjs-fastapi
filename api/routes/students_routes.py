from fastapi import APIRouter
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from ..schemas.student_schema import Student as StudentEntity
from ..schemas.student_schema import CreateStudent
from ..data.students import Students_table
from ..controllers.students_controller import StudentController

students_routes = APIRouter()

@students_routes.get("/all", tags=["Students"], response_model=list[StudentEntity])
async def get_students()-> list[StudentEntity]:
    students = StudentController.get_students()
    return JSONResponse(content=jsonable_encoder(students), status_code=200)

@students_routes.get('/get/{id}', tags=['Students'], response_model=StudentEntity)
async def get_student(id:int)-> StudentEntity:
    student = StudentController.get_student(id)
    return JSONResponse(content=jsonable_encoder(student), status_code=200)

@students_routes.post('/create', tags=['Students'], response_model=list[StudentEntity])
async def create_student(student_dat: CreateStudent)->CreateStudent:
    try:
        student_create = StudentController.create_student(student_dat)
        return JSONResponse(content=jsonable_encoder(student_create), status_code=201)
    except Exception as e:
        return JSONResponse(content={"message": f"An error occurred: {e}"}, status_code=500)

@students_routes.put('/update/id={id}', tags=['Students'])
async def update_student(id: int, student: CreateStudent) -> JSONResponse:
    student_update = StudentController.update_student(id, student)
    if student_update is not None:
        return JSONResponse(content=jsonable_encoder(student_update), status_code=200)
    return JSONResponse(content={"message": "Student not found"}, status_code=404)

@students_routes.delete('/delete', tags=['Students'])
async def delete_student(id: int) -> JSONResponse:
    student_delete = StudentController.delete_student(id)
    if student_delete is not None:
        return JSONResponse(content=student_delete, status_code=200)
    return JSONResponse(content={"message": "Student not found"}, status_code=404)

 