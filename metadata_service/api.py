# Metadata Service for info about the server and misc
# ==============================================
# THIS WILL PROBABLY NEVER BE USED FOR ANYTHING
# SERIOUS, JUST SEEING HOW THINGS WORK
# ==============================================

from flask import Flask
from flask_restful import Resource, Api

import os


app = Flask(__name__)
api = Api(app)


class Meta(Resource):

    def get(self):
        # popen returns ip + a newline .strip will remove that
        address = os.popen("hostname -I").read().strip()

        return {
            "header": address
        }, 200



api.add_resource(Meta, "/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
