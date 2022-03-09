from flask import request
from database.models import User
from flask_restful import Resource


class SignupAPI(Resource):
    def post(self):
        body = request.get_json()
        app_user = User(**body)
        app_user.hash_password()
        app_user.save()
        id = app_user.id
        return {'id': str(id)}, 200
