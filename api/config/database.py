import os
from sqlalchemy import create_engine, MetaData, Table
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

sqlite_file_name = "../database.sqlite"
base_dir = os.path.dirname(os.path.realpath(__file__))

database_url = f"sqlite:///{os.path.join(base_dir, sqlite_file_name)}"

engine = create_engine(database_url, echo=True)

Session = sessionmaker(bind=engine)

Base = declarative_base()

# metadata = MetaData()
# # Reemplaza 'nombre_de_la_tabla' con el nombre de tu tabla
# table_to_drop = Table('teachers', metadata, autoload_with=engine)

# with engine.connect() as connection:
#     table_to_drop.drop(connection)

