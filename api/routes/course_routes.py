from fastapi import APIRouter
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from ..schemas.course_schema import CourseSchema, CourseCreateSchema, CourseUpdateSchema
from ..data.grades import Grades_table
from ..controllers.course_controller import CourseController


course_routes = APIRouter()

@course_routes.get('/', tags=['Courses'], response_model=list[CourseSchema])
def get_courses()->list[CourseSchema]:
    """Get all courses"""
    response = CourseController.get_courses()
    return JSONResponse(content=jsonable_encoder(response), status_code=200)

@course_routes.get('/leng', tags=['Courses'])
def get_courses_leng()->int:
    """Get the number of courses"""
    response = CourseController.get_courses_leng()
    return JSONResponse(content=jsonable_encoder(response), status_code=200)

@course_routes.get('/{id}', tags=['Courses'], response_model=CourseSchema)
def get_course(id: int)->CourseSchema:
    """Get a course by id"""
    response = CourseController.get_course_by_id(id)
    return JSONResponse(content=jsonable_encoder(response), status_code=200)

@course_routes.post('/', tags=['Courses'], response_model=CourseCreateSchema)
def create_course(course: CourseCreateSchema)->CourseCreateSchema:
    """Create a new course"""
    response = CourseController.create_course(course)
    return JSONResponse(content=jsonable_encoder(response), status_code=201)

@course_routes.put('/{id}', tags=['Courses'])
def update_course(id: int, course: CourseUpdateSchema)->CourseUpdateSchema:
    """Update course"""
    response = CourseController.update_course(id, course.model_dump())
    return JSONResponse(content=response, status_code=200)