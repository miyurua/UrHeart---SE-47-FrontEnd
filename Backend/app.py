from urllib import response
from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from werkzeug import Response
from flask_mongoengine import MongoEngine
import json
from resources.routes import initialize_routes
from resources.patient import PatientsAPI, PatientAPI
from flask_cors import CORS
from database.db import initialize_db
from database.models import Patient
from Check import checker
import os
import numpy as np
import pickle

app = Flask(__name__)
api = Api(app)



@app.route('/test', methods=['POST'])
def test():
    data = request.get_json()
    print(data.age)


@app.route('/pred', methods = ['POST'])
def pred():
    body = request.json['body']
    test_data = request.json
    s1 = json.dumps(test_data)
    print_json = json.loads(s1)
    list = print_json['body']
    input_data = (float(list['age']), float(list['sex']), float(list['chestPainType']),	float(list['restingBP']), float(list['cholestrol']), float(list['fastingBloodSugar']), float(list['restingECG']), float(list['maxHeartRate']), float(list['exerciseAngina']),	float(list['oldpeak']), float(list['STslope']))
    print(input_data)
    return jsonify(body)


# if request.method == 'POST':

# age = [i for i in request.form.values()]
# print(x)
# y = np.array([age])
# print(y)
# data = request.get_json()
# print(data.age)
# mytule = (data.age, data.somevalue, ....)
# prdictio = model.predct(mytule)
# if(preictio ==1):
#     return {
#         "message": "jsdksdmskld",
#         "somethin": "djsdfsfk"
#            }, 200
# print(data)
# return "success", 200
# x = (21, 34, 413, 323 , ...)
# checker.predict(x)
# ---------------------------------------
#
# data_arg = reqparse.RequestParser()
# data_arg.add_argument("id", type=str)
#
# # Loading ML Model
# model = pickle.load(open('Notebook/heart_disease_pred_model', 'rb'))
#
#
# class Predict(Resource):
#     def __init__(self):
#         self.model1 = model
#
#     def post(self):
#         # parse data to post request
#         args = data_arg.parse_args()
#         # convert string into int list
#         temp = args.id.strip('][').split(',')
#         temp = [float(i) for i in temp]
#         # predict output
#         out = self.model1.Predict([temp])
#         # return prediction
#         return jsonify({"message": int(out)})
#
#
# api.add_resource(Predict, '/api/predict')
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

class CoreAPI(Resource):
    def get(self, id):
        try:
            tester = Patient.objects().get(id=id).to_json()
            return Response(tester, mimetype="application/json", status=200)
        except mongoengine.errors.ValidationError:
            res = {
                'error':'INVALID ID',
                'status': 500
            }
            return res, 500
    def prediction():
        print("Prediction")          


app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/patient-list'
}

initialize_db(app)
initialize_routes(api)

app.run()
