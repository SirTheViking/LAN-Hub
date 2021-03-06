# Login/Register service


from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

import os, random
import hashlib, uuid
import mysql.connector


app = Flask(__name__)
api = Api(app)
# To allow Cors requests everywhere (maybe not a good idea)
#CORS(app)

# Database data config
config = {
    "user": "root",
    "password": "root",
    "host": "db",
    "port": "3306",
    "database": "ip"
}

connection = mysql.connector.connect(**config)
cursor = connection.cursor(dictionary=True)


# Create a connection to the database
def connect():
    global connection 
    global cursor 

    if not connection.is_connected():
        connection = mysql.connector.connect(**config)
        cursor = connection.cursor(dictionary=True)

# Kill a connection to the database
def disconnect():
    global connection
    global cursor

    if connection.is_connected():
        connection.close()
        cursor.close()


# / - endpoint for getting all users
# or for deleting users
class User(Resource):

    # Get users
    def get(self):
        connect()

        query = "SELECT * FROM users;"
        cursor.execute(query)

        data = cursor.fetchall()
        
        disconnect()
        # Temporary (don't send passwords back)
        return jsonify(data)



    # TODO: Ability to remove accounts after login
    def delete(self):
        return "A DELETE", 200










# /deleteall - Development endpoint for clearing 
# the database if needed
class Delete(Resource):

    def delete(self):
        connect()

        query = "TRUNCATE TABLE users"
        cursor.execute(query)
        connection.commit()

        disconnect()
        return {
            "message": "Users database cleared"
        }, 204








api.add_resource(User, "/all", "/delete/<string:username>")

api.add_resource(Delete, "/deleteall") # Remove later






if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)

