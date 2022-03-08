from .patient import PatientsAPI, PatientAPI


def initialize_routes(api):
    api.add_resource(PatientsAPI, '/api/patients')
    api.add_resource(PatientAPI, '/api/patients/<id>')