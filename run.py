from flask import Flask, make_response

app = Flask(__name__)

@app.route("/")
def init():
    return make_response(open('index.html').read())

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)
