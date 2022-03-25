from flask import Flask, jsonify, request
# from dotenv import load_dotenv
# load_dotenv()
from flask_bcrypt import Bcrypt
from database.db import initialize_db
from flask_restful import Resource, Api, reqparse
from resources.routes import initialize_routes
from resources.patient import PatientsAPI, PatientAPI
from flask_jwt_extended import JWTManager
import os
import numpy as np
import pickle

app = Flask(__name__)
#app.config.from_envvar('ENV_FILE_LOCATION')
api = Api(app)
#bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# ---------------------------------------


data_arg = reqparse.RequestParser()
data_arg.add_argument("id", type=str)

# Loading ML Model
model = pickle.load(open('Notebook/heart_disease_pred_model', 'rb'))


class Predict(Resource):
    def __init__(self):
        self.model1 = model

    def post(self):
        # parse data to post request
        args = data_arg.parse_args()
        # convert string into int list
        temp = args.id.strip('][').split(',')
        temp = [float(i) for i in temp]
        # predict output
        out = self.model1.Predict([temp])
        # return prediction
        return jsonify({"message": int(out)})


api.add_resource(Predict, '/api/predict')
# ---------------------------------------

"""
@app.route('/result', methods=['POST', 'GET'])
def result():
    age = int(request.form['age'])
    sex = int(request.form['sex'])
    trestbps = float(request.form['trestbps'])
    chol = float(request.form['chol'])
    restecg = float(request.form['restecg'])
    thalach = float(request.form['thalach'])
    exang = int(request.form['exang'])
    cp = int(request.form['cp'])
    fbs = float(request.form['fbs'])
    x = np.array([age, sex, cp, trestbps, chol, fbs, restecg,
                  thalach, exang]).reshape(1, -1)

    scaler_path = os.path.join(os.path.dirname(__file__), 'Notebook/scaler.pkl')
    scaler = None
    with open(scaler_path, 'rb') as f:
        scaler = pickle.load(f)

    x = scaler.transform(x)

    model_path = os.path.join(os.path.dirname(__file__), 'Notebook/rfc.sav')
    clf = joblib.load(model_path)

    y = clf.predict(x)
    print(y)

"""

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/patient-list'
}

initialize_db(app)
initialize_routes(api)

app.run()
