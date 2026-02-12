"""
Logging configuration for the application.
"""
import logging
import sys
from pathlib import Path
from ..core.config import settings

# Create logs directory
LOG_DIR = Path("./logs")
LOG_DIR.mkdir(exist_ok=True)

# Configure logging format
LOG_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
DATE_FORMAT = "%Y-%m-%d %H:%M:%S"

# Configure root logger
logging.basicConfig(
    level=getattr(logging, settings.LOG_LEVEL.upper()),
    format=LOG_FORMAT,
    datefmt=DATE_FORMAT,
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(LOG_DIR / "app.log"),
    ],
)

# Create logger for the application
logger = logging.getLogger("educonnect")

# Suppress noisy loggers
logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)
