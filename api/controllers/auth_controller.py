# from ..schemas.teacher_schema import TeacherSchema
# from ..schemas.student_schema import Student
# from ..schemas.father_schema import Father
# from .teachers_controller import TeacherController
# from .students_controller import StudentController
# from .fathers_controller import FatherController


# class AuthController():

#     def auth_teacher(email, password):
#         teachers = TeacherController.get_teachers()
#         for teacher in teachers:
#             if teacher.email == email and teacher.password == password:
#                 return True
#             return False
        
#     def auth_student(email, password):
#         students = StudentController.get_students()
#         for student in students:
#             if student.email == email and student.password == password:
#                 return True
#             return False
        
#     def auth_father(email, password):
#         fathers = FatherController.get_fathers()
#         for father in fathers:
#             if father.email == email and father.password == password:
#                 return True
#             return False
        

# from fastapi import HTTPException
# from ..models.user_model import UserModel
# from ..auth.jwt_manager import JwtManager

# class AuthController:
#     @staticmethod
#     async def validate_user(email: str, password: str):
#         user = await UserModel.get_user_by_email(email)
#         if not user or not user.verify_password(password):
#             raise HTTPException(status_code=401, detail="Credenciales inválidas")
#         return user
#     @staticmethod
#     async def login(email: str, password: str):
#         user = await AuthController.validate_user(email, password)
#         token = await JwtManager.create_token(user.email)
#         return {
#             "access_token": token,
#             "token_type": "bearer",
#             "user": {
#                 "email": user.email
#             }
#         }
