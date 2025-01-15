from pydantic import BaseModel



class UserData(BaseModel):
    """This is a class that representing dates od user for login"""
    email: str
    password: str

    class Config():
        json_schema_extra = {
            "example": {
                "email": "jhondoe@educonect.com",
                "password": "hxk65d#"
            }
        }
