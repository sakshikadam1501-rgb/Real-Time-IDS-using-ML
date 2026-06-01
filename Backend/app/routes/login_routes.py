from fastapi import APIRouter
from pydantic import BaseModel
from app.auth import create_access_token

router = APIRouter()

class LoginData(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(data: LoginData):

    if (
        data.username == "admin"
        and
        data.password == "admin123"
    ):

        token = create_access_token(
            {"sub": data.username}
        )

        return {
            "access_token": token,
            "token_type": "bearer"
        }

    return {
        "message": "Invalid credentials"
    }