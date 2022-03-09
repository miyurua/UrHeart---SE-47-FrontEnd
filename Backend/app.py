from flask import Flask
from database.db import initialize_db
from flask_restful import Api
from resources.routes import initialize_routes
from resources.patient import PatientsAPI, PatientAPI

app = Flask(__name__)
api = Api(app)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/patient-list'
}

post()

initialize_db(app)

initialize_routes(api)

app.run()