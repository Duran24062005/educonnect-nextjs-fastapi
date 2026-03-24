from dataclasses import dataclass

from sqlalchemy.orm import Session

from ..models.father_models import Father
from ..models.student_models import Student
from ..models.teacher_models import Teacher


@dataclass
class AuthUser:
    id: int
    email: str
    role: str
    first_name: str
    last_name: str
    password: str
    entity: Teacher | Student | Father


class AuthRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def _build_auth_user(self, entity, role: str) -> AuthUser | None:
        if entity is None:
            return None

        return AuthUser(
            id=entity.id,
            email=entity.email,
            role=role,
            first_name=entity.first_name,
            last_name=entity.last_name,
            password=entity.password,
            entity=entity,
        )

    def find_by_email(self, email: str) -> AuthUser | None:
        for model, role in ((Teacher, "teacher"), (Student, "student"), (Father, "father")):
            entity = self.db.query(model).filter(model.email == email).first()
            auth_user = self._build_auth_user(entity, role)
            if auth_user is not None:
                return auth_user
        return None

    def get_by_role_and_email(self, role: str, email: str) -> AuthUser | None:
        model_map = {
            "teacher": Teacher,
            "student": Student,
            "father": Father,
        }
        model = model_map.get(role)
        if model is None:
            return None

        entity = self.db.query(model).filter(model.email == email).first()
        return self._build_auth_user(entity, role)

    def persist_password(self, auth_user: AuthUser, hashed_password: str) -> None:
        auth_user.entity.password = hashed_password
        self.db.add(auth_user.entity)
        self.db.commit()
        self.db.refresh(auth_user.entity)
