from ..models.father_models import Father as FatherEntity
from sqlalchemy.orm import Session

from ..core.security import hash_password


class FatherService:
    def __init__(self, db: Session) -> None:
        self.db = db

    def get_fathers(self):
        return self.db.query(FatherEntity).all()

    def get_father_by_id(self, father_id: int):
        return self.db.query(FatherEntity).filter(FatherEntity.id == father_id).first()

    def create_father(self, father_data):
        payload = father_data.model_dump()
        payload["password"] = hash_password(payload["password"])
        father = FatherEntity(**payload)
        self.db.add(father)
        self.db.commit()
        self.db.refresh(father)
        return father

    def update_father(self, father_id: int, father_data):
        father = self.get_father_by_id(father_id)
        if father is None:
            return None

        for key, value in father_data.model_dump(exclude_unset=True).items():
            if key == "password" and value:
                value = hash_password(value)
            setattr(father, key, value)

        self.db.commit()
        self.db.refresh(father)
        return father

    def delete_father(self, father_id: int) -> bool:
        father = self.get_father_by_id(father_id)
        if father is None:
            return False

        self.db.delete(father)
        self.db.commit()
        return True
