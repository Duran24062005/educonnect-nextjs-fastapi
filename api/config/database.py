import os
from sqlalchemy import create_engine, MetaData, Table
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

sqlite_file_name = "../educonnect_db.sqlite"
base_dir = os.path.dirname(os.path.realpath(__file__))

database_url = os.getenv("DATABASE_URL") or f"sqlite:///{os.path.join(base_dir, sqlite_file_name)}"
is_sqlite = database_url.startswith("sqlite")

engine = create_engine(
    database_url,
    echo=os.getenv("SQL_ECHO", "false").lower() == "true",
    connect_args={"check_same_thread": False} if is_sqlite else {},
)

Session = sessionmaker(bind=engine, autoflush=False, autocommit=False)

Base = declarative_base()

# metadata = MetaData()
# # Reemplaza 'nombre_de_la_tabla' con el nombre de tu tabla
# table_to_drop = Table('teachers', metadata, autoload_with=engine)

# with engine.connect() as connection:
#     table_to_drop.drop(connection)
