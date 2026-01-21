from fastapi import FastAPI
from database import Base, engine
from auth.routes import router as auth_router

# Auto-create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Student Portal Backend (FastAPI)")

app.include_router(auth_router)


@app.get("/")
def home():
    return {"message": "Student Portal API Running"}
