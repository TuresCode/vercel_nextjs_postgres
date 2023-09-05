from flask import Flask
app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    a = 1000
    b = 2000
    c = a + b
    return f"<p>Hello, World {c}!</p>"