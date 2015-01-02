from sqlalchemy import Column, Integer, String
from database import Base

class Msg(Base):
    __tablename__ = 'MSG'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=False)
    email = Column(String(120))
    time = Column(String(120))
    subject = Column(String(120))
    content = Column(String(1000))

    def __init__(self, name=None, email=None, time=None, subject=None, content=None):
        self.name = name
        self.email = email
        self.time = time
        self.subject = subject
        self.content = content

    def __repr__(self):
        return '<Msg %r>' % (self.name)

# from database import init_db
# init_db()
