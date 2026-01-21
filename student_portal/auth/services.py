"""
Service layer for handling database operations related to authentication.
"""

from sqlalchemy.orm import Session
from .models import User
from .utils import hash_password, verify_password, create_access_token


def create_user(db: Session, username: str, email: str, password: str):
    """Register a new user."""
    try:
        # Check for duplicates
        if db.query(User).filter(User.username == username).first():
            return {"error": "Username already exists"}

        if db.query(User).filter(User.email == email).first():
            return {"error": "Email already registered"}

        user = User(
            username=username,
            email=email,
            password=hash_password(password)
        )

        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    except Exception as e:
        db.rollback()
        return {"error": str(e)}


def authenticate_user(db: Session, username: str, password: str):
    """Validate username and password, return JWT token."""
    try:
        user = db.query(User).filter(User.username == username).first()
        if not user:
            return None

        if not verify_password(password, user.password):
            return None

        token = create_access_token({"user_id": user.id, "username": user.username})
        return token

    except Exception:
        return None


def update_user_password(db: Session, email: str, new_password: str):
    """Update password for a user."""
    try:
        user = db.query(User).filter(User.email == email).first()
        if not user:
            return None

        user.password = hash_password(new_password)
        db.commit()
        return user

    except Exception:
        db.rollback()
        return None


def login_with_face_id(db: Session, face_id_key: str):
    """Authenticate using face ID key."""
    try:
        return db.query(User).filter(User.face_id_key == face_id_key).first()
    except Exception:
        return None
