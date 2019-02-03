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



add_user = "INSERT INTO users (username, password) VALUES (%s, %s);"



parser = reqparse.RequestParser()
parser.add_argument("username", type=str)
parser.add_argument("password", type=str)


class User(Resource):

    # Get users
    def get(self):
        query = "SELECT * FROM users;"
        cursor.execute(query)

        data = cursor.fetchall()

        

        return jsonify(data)

    
    # Create user
    def post(self):
        args = parser.parse_args()

        user_data = (args["username"], args["password"])

        # In case the checking javascript was deleted client side
        # and the form is submitted empty
        if len(args["username"]) == 0 and len(args["password"]) == 0:
            return {
                "message": "Expected something funny? This isn't it."
            }, 400
        else:
            
            cursor.execute(add_user, user_data)
            connection.commit()

            return {
                "message": "Everything Worked (WIP message)"
            }, 201


    def put(self):
        return "A PUT", 200

    def delete(self):
        return "A DELETE", 200


api.add_resource(User, "/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
