from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ..controllers.students_controller import StudentController
from ..schemas.student_schema import CreateStudent, StudentSchema, UpdateStudent

students_routes = APIRouter()

@students_routes.get("/all", tags=["Students"], response_model=list[StudentSchema])
async def get_students()-> list[StudentSchema]:
    students = StudentController.get_students()
    return JSONResponse(content=jsonable_encoder(students), status_code=200)

@students_routes.get('/get/{id}', tags=['Students'], response_model=StudentSchema)
async def get_student(id:int)-> StudentSchema:
    student = StudentController.get_student(id)
    return JSONResponse(content=jsonable_encoder(student), status_code=200)

@students_routes.post('/create', tags=['Students'], response_model=StudentSchema)
async def create_student(student_dat: CreateStudent)->CreateStudent:
    try:
        student_create = StudentController.create_student(student_dat)
        return JSONResponse(content=jsonable_encoder(student_create), status_code=201)
    except Exception as e:
        return JSONResponse(content={"message": f"An error occurred: {e}"}, status_code=500)

@students_routes.put('/update/id={id}', tags=['Students'])
async def update_student(id: int, student: UpdateStudent) -> JSONResponse:
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

 
