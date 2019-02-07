# Login/Register service for info about the server and misc


from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

import os, random
import hashlib, uuid
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
add_user = "INSERT INTO users (username, password, salt, profile_image) VALUES (%s, %s, %s, %s);"
# The login query
get_user = "SELECT * FROM users WHERE username = %s"


# Parse request arguments 
# TODO: Change this since it's going to be deprecated
parser = reqparse.RequestParser()
parser.add_argument("username", type=str)
parser.add_argument("password", type=str)
parser.add_argument("domain", type=str)





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

        username = args["username"]
        password = args["password"]

        # In case the checking javascript was deleted client side
        # and the form is submitted empty
        if len(username) == 0 and len(password) == 0:
            return {
                "message": "Expected something funny? This isn't it."
            }, 400
        else:
            domain = args["domain"]

            image_file = random.choice(os.listdir("data/images"))
            profile_image = f"{domain}/data/images/{image_file}"
            
            salt = uuid.uuid4().hex
            hashed_password = hashlib.sha512((password + salt).encode("utf-8")).hexdigest()
            
            cursor.execute(add_user, (username, hashed_password, salt, profile_image))
            connection.commit()

            return {
                "message": "Successfully Registered"
            }, 201




# /login - endpoint for logging users in
class Login(Resource):

    def post(self):
        args = parser.parse_args()

        username = args["username"]
        password = args["password"]

        if len(username) == 0 and len(password) == 0:
            return {
                "message": "Expected something funny? This isn't it."
            }, 400
        else:
            cursor.execute(get_user, (username,))
            data = cursor.fetchone()

            hashed_local = hashlib.sha512((password + data["salt"]).encode("utf-8")).hexdigest()
            
            # Work in progress
            if hashed_local == data["password"]:
                return "IT WORKED", 202
            else:
                return "IT DIDNT"





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








api.add_resource(User, "/all")
api.add_resource(Login, "/login")
api.add_resource(Register, "/register")
api.add_resource(Delete, "/deleteall") # Remove later






if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
