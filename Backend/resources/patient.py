from flask import Response, request
from flask_jwt_extended import jwt_required
from database.models import Patient
from flask_restful import Resource


class PatientsAPI(Resource):
    def get(self):
        patients = Patient.objects().to_json()
        return Response(patients, mimetype="application/json", status=200)

    @jwt_required
    def post(self):               
        body = request.get_json()
        patient = Patient(**body).save()
        id = patient.id
        return {'id', str(id)}, 200
    

class PatientAPI(Resource):
    @jwt_required
    def put(self, id):
        body = request.get_json()
        Patient.objects.get(id=id).update(**body)
        return '', 200 

    @jwt_required
    def delete(self, id):
        patient = Patient.objects.get(id=id).delete()
        return '', 200
    
    def get(self, id):
        patients = Patient.objects.get(id=id).to_json()
        return Response(patients, mimetype="application/json", status=200)