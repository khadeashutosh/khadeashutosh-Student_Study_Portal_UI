"""
Pydantic request & response schemas for authentication module.
"""

from pydantic import BaseModel, EmailStr

# ---------------- Request Schemas ---------------- #

class RegisterRequest(BaseModel):
    username: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    username: str
    password: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ForgotPasswordConfirmRequest(BaseModel):
    email: EmailStr
    new_password: str


class FaceLoginRequest(BaseModel):
    face_id_key: str


# ---------------- Response Schemas ---------------- #

class UserResponse(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        orm_mode = True
