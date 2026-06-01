from fastapi import APIRouter
from app.database import attacks_collection

router = APIRouter()

@router.get("/attacks")
def get_attacks():

    attacks = list(
        attacks_collection.find({}, {"_id": 0})
    )

    return attacks