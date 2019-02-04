# Login/Register service for info about the server and misc


from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse

import os
import mysql.connector


app = Flask(__name__)
api = Api(app)

config = {
    "user": "root",
    "password": "root",
    "host": "db",
    "port": "3306",
    "database": "ip"
}

connection = mysql.connector.connect(**config)
cursor = connection.cursor(dictionary=True)

parser = reqparse.RequestParser()
parser.add_argument("username", type=str)
parser.add_argument("password", type=str)


class Login(Resource):
    
    # Authenticate user
    def post(self):
        return {
            "lmao": "lmao"
        }, 200



api.add_resource(Login, "/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
