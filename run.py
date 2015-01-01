from flask import Flask, make_response, request
from flask_mail import Mail, Message
import json

app = Flask(__name__)

app.config.update(dict(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True,
    MAIL_USERNAME = 'zhiyazuo@gmail.com',
    MAIL_PASSWORD = 'bwyqoxmwgpqxirjs',
    DEFAULT_MAIL_SENDER = 'zhiyazuo@gmail.com',
))

mail = Mail(app)

@app.route("/")
def init():
    return make_response(open('index.html').read())

@app.route("/contact" ,methods=['POST'])
def contactMe():
    message = json.loads(request.data)
    msg = Message("Message Confirmation",
                  sender=message["email"],
                  recipients=[message["email"]])
    msg.body = "I've received your message. Thank you and I will reply as soon as possible!"
    mail.send(msg)
    return "received!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)
