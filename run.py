from flask import Flask, make_response, request
from flask_mail import Mail, Message
#from flask.ext.sqlalchemy import SQLAlchemy
import json
import models
from database import db_session

app = Flask(__name__)

app.config.update(dict(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True,
    MAIL_USERNAME = 'webofzuo@gmail.com',
    MAIL_PASSWORD = 'webofzuo19491001',
    MAIL_DEFAULT_SENDER = 'webofzuo@gmail.com',
))

mail = Mail(app)

@app.route("/")
def init():
    return make_response(open('index.html').read())

@app.route("/contact" ,methods=['POST'])
def contactMe():
    message = json.loads(request.data)
    name = message["name"]
    email = message["email"]
    timestamp = message["timestamp"]
    content = message["content"]
    subject = message["subject"]

    confirmation = Message("Message Confirmation",
                  recipients=[email])
    confirmation.body = 'Hi, {}, \n\nI\'ve received your message on "{}".\
     \n\nThank you and I will reply as soon as possible!\n\nBest,\n Zhiya'.format(message["name"], message["subject"])

    mail.send(confirmation)

    msg = Message("My Web: Message from {}".format(email),
                  recipients=[mail.app.config["MAIL_DEFAULT_SENDER"]])

    msg.body = "Subject: {}\n\n Content:\n {}".format(subject, content)
    mail.send(msg)

    m = models.Msg(name, email, timestamp, content, subject)
    db_session.add(m)
    db_session.commit()

    return "received!"

if __name__ == "__main__":
    
    app.run(debug=True, host='0.0.0.0', port=8000)
