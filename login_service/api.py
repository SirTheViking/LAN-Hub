# Login Service

from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class User(Resource):
    def get(self):
        return {
            "usernames": [
                "Lewl",
                "Boi",
                "Turtle"
                        ],
            "password": "lmao",
            "magic": "kegs"
        }


api.add_resource(User, "/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)