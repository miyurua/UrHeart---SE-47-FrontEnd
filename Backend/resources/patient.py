from flask import Response, request 
from database.models import Patient
from flask_restful import Resource


class PatientsAPI(Resource):
    def get(self):
        body = request.get_json()
        patients = Patient(**body).save()
        return Response(patients, mimetype="application/json", status=200)
    
    def post(self):
        body = request.get_json()
        patient = Patient(**body).save()
        id = patient.id
        return {'id', str(id)}, 200
    
    
class PatientAPI(Resource):
    def put(self, id):
        body = request.get_json()
        Patient.objects.get(id=id).update(**body)
        return '', 200
    
    def delete(self, id):
        patient = Patient.objects.get(id=id).delete()
        return '', 200
    
    def get(self, id):
        patients = Patient.objects.get(id=id).to_json()
        return Response(patients, mimetype="application/json", status=200)