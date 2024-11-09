from ..models.father_models import Father as FatherEntity

class FatherService():

    def __iniot__(self, db)->None:
        self.db = db

    def get_fathers(self):
        return self.db.query(FatherEntity).all()