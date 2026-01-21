"""
Database configuration file.
Creates PostgreSQL connection using SQLAlchemy.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# NOTE: Encode '@' as '%40' in password
DATABASE_URL = "postgresql://postgres:%40Ashu1010@localhost:5432/fastapi_db"

try:
    engine = create_engine(DATABASE_URL, echo=True)
except Exception as e:
    raise Exception(f"Database connection error: {str(e)}")

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()
