from fastapi import APIRouter, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from ..schemas.teacher_schema import TeacherSchema, TeacherCreateSchema, TeacherUpdateSchema
from ..data.teachers import Teachers_table
from ..controllers.teachers_controller import TeacherController

teacher_routes = APIRouter()


@teacher_routes.get("/all", tags=["Teachers"], response_model=list[TeacherSchema])
def get_teacher()-> list[TeacherSchema]:
    resp = TeacherController.get_teachers()
    return JSONResponse(content=jsonable_encoder(resp), status_code=200)

@teacher_routes.get('/{id}', tags=['Teachers'], response_model=TeacherSchema)
def get_teacher(id:int)-> TeacherSchema:
    resp = TeacherController.get_teacher_by_id(id)
    if resp is not None:
        return JSONResponse(content=jsonable_encoder(resp), status_code=200)
    return JSONResponse(content={'Not Found': 'Teacher not found'}, status_code=404)

@teacher_routes.get('/post/teachers/{id}', tags=['Teachers'])
def get_all_teachers(id: int)-> list[TeacherSchema]:
    resp = TeacherController.get_post_by_teacher(id)
    return JSONResponse(content=jsonable_encoder(resp), status_code=200)

@teacher_routes.post('/', tags=['Teachers'], response_model=TeacherSchema)
def create_teacher(teacher: TeacherCreateSchema)->TeacherCreateSchema:
    resp = TeacherController.create_teacher(teacher)
    return JSONResponse(content=jsonable_encoder(resp), status_code=201)

@teacher_routes.post('/upload_file', tags=['Teachers'])
def upload_file(id: int, file: UploadFile)->JSONResponse:
    # Verificar el archivo
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type")
    # Guardar el archivo
    response = TeacherController.upload_file(id, file)
    if response is None:
            raise HTTPException(status_code=500, detail="Failed to upload file")
    return JSONResponse(content=response, status_code=201)
    

@teacher_routes.put('/', tags=['Teachers'])
def update_father(id: int, father: TeacherUpdateSchema) -> JSONResponse:
    resp = TeacherController.update_teacher(id, father.model_dump())
    return JSONResponse(content=jsonable_encoder(resp), status_code=200)

@teacher_routes.delete('/', tags=['Teachers'])
def delete_father(id: int) -> JSONResponse:
    resp = TeacherController.delete_teacher(id)
    return JSONResponse(content=jsonable_encoder(resp), status_code=200)
