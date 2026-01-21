"""
Auth routes matching Django-style API endpoints.
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import SessionLocal
from .schemas import (
    RegisterRequest,
    LoginRequest,
    ForgotPasswordRequest,
    ForgotPasswordConfirmRequest,
    FaceLoginRequest,
    UserResponse
)
from .services import (
    create_user,
    authenticate_user,
    update_user_password,
    login_with_face_id
)

router = APIRouter(prefix="/auth", tags=["Authentication"])


def get_db():
    """Database dependency used in all routes."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ---------------- Register ---------------- #

@router.post("/register/", response_model=UserResponse)
def register_user(data: RegisterRequest, db: Session = Depends(get_db)):
    """Register a new user."""
    result = create_user(db, data.username, data.email, data.password)

    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])

    return result


# ---------------- Login ---------------- #

@router.post("/login/")
def login_user(data: LoginRequest, db: Session = Depends(get_db)):
    """User login using username & password."""
    token = authenticate_user(db, data.username, data.password)

    if not token:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    return {"access_token": token, "token_type": "bearer"}


# ---------------- Forgot Password Request ---------------- #

@router.post("/forgot-password/")
def forgot_password(data: ForgotPasswordRequest):
    """Email sending or OTP logic (not implemented)."""
    return {"message": "Password reset link sent (email pending)"}


# ---------------- Forgot Password Confirm ---------------- #

@router.post("/forgot-password/confirm/")
def confirm_forgot_password(data: ForgotPasswordConfirmRequest, db: Session = Depends(get_db)):
    """Update user's password."""
    user = update_user_password(db, data.email, data.new_password)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {"message": "Password updated successfully"}


# ---------------- Face Login ---------------- #

@router.post("/face-login/")
def face_login(data: FaceLoginRequest, db: Session = Depends(get_db)):
    """Login using face ID key."""
    user = login_with_face_id(db, data.face_id_key)

    if not user:
        raise HTTPException(status_code=404, detail="Face ID not recognized")

    return {"message": "Face login successful", "username": user.username}
