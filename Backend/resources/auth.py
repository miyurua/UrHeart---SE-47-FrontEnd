from flask import Response, request, Blueprint, redirect
from flask_jwt_extended import create_access_token
from database.models import User
from flask_restful import Resource
import datetime


class SignupAPI(Resource):
    def post(self):
        body = request.get_json()
        app_user = User(**body)
        app_user.hash_password()
        app_user.save()
        id = app_user.id
        return {'id': str(id)}, 200


class LoginAPI(Resource):
    def post(self):
        body = request.get_json()
        app_user = User.objects.get(email=body.get('email'))
        authorized = app_user.check_password(body.get('password'))
        if not authorized:
            return {'error':'Email or Password invalid'}, 401

        expires = datetime.timedelta(days=7)
        # identifier --> userid
        access_token = create_access_token(identity=str(user.id),expires_delta=expires)
        return {'token': access_token},200