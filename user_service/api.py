# Login/Register service for info about the server and misc


from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

import os
import mysql.connector


app = Flask(__name__)
api = Api(app)
# To allow Cors requests everywhere
CORS(app)

# Database data config
config = {
    "user": "root",
    "password": "root",
    "host": "db",
    "port": "3306",
    "database": "ip"
}

# Connect to database
connection = mysql.connector.connect(**config)
cursor = connection.cursor(dictionary=True)


# The registration query
add_user = "INSERT INTO users (username, password) VALUES (%s, %s);"


# Parse request arguments 
# TODO: Change this since it's going to be deprecated
parser = reqparse.RequestParser()
parser.add_argument("username", type=str)
parser.add_argument("password", type=str)





# / - endpoint for getting all users
# or for deleting users
class User(Resource):

    # Get users
    def get(self):
        query = "SELECT * FROM users;"
        cursor.execute(query)

        data = cursor.fetchall()
        
        # Temporary (don't send passwords back)
        return jsonify(data)



    # TODO: Ability to remove accounts after login
    def delete(self):
        return "A DELETE", 200







# /register - endpoint for registering users
class Register(Resource):
    
    # Create user
    # TODO: Hash passwords
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
                "message": "Successfully Registered"
            }, 201






# /deleteall - Development endpoint for clearing 
# the database if needed
class Delete(Resource):

    def delete(self):
        query = "TRUNCATE TABLE users"
        cursor.execute(query)
        connection.commit()

        return {
            "message": "Users database cleared"
        }, 204






api.add_resource(User, "/")
api.add_resource(Register, "/register")
api.add_resource(Delete, "/deleteall") # Remove later






if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
