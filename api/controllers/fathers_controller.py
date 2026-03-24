from ..schemas.father_schema import CreateFather, FatherSchema, UpdateFather
from ..services.fathers_services import FatherService
from ..config.database import Session


class FatherController:
    @staticmethod
    def get_fathers() -> list[FatherSchema]:
        with Session() as db:
            return FatherService(db).get_fathers()

    @staticmethod
    def get_father(father_id: int):
        with Session() as db:
            return FatherService(db).get_father_by_id(father_id)

    @staticmethod
    def create_father(data: CreateFather):
        with Session() as db:
            return FatherService(db).create_father(data)

    @staticmethod
    def update_father(father_id: int, data: UpdateFather):
        with Session() as db:
            return FatherService(db).update_father(father_id, data)

    @staticmethod
    def delete_father(father_id: int):
        with Session() as db:
            deleted = FatherService(db).delete_father(father_id)
            return {"message": "Father deleted successfully"} if deleted else None
