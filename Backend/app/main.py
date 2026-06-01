from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routes.attack_routes import router
from app.routes.login_routes import router as login_router

app = FastAPI()

app.include_router(router)

app.include_router(login_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Cloud IDS Running"}

