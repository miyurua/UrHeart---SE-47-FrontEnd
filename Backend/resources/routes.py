from .patient import PatientsAPI, PatientAPI
from .auth import SignupAPI, LoginAPI


def initialize_routes(api):
    api.add_resource(PatientsAPI, '/api/patients')
    api.add_resource(PatientAPI, '/api/patients/<id>')

    api.add_resource(SignupAPI, '/api/auth/signup')
    api.add_resource(LoginAPI, '/api/auth/login')