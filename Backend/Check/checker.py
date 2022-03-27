import pickle
import json
from re import X
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import numpy as np
import pandas as pd
import seaborn as sns

#   loading the ML model
model = pickle.load(open('../Notebook/model.pkl', 'rb'))
# x = (37, 1, 4, 140, 207, 0, 0,	130, 1,	1.5, 2)
# input_data = (37, 1, 4,	140, 207, 0, 0,	130, 1,	1.5, 2)
input_data = (48, 0, 2,	120, 284, 0, 0, 120, 0,	0.0, 1)

# input_data = X

test_data = {'''
    "test_data": [
    {
    "age":"41",
    "sex":"1",
    "chest_pain_type":"2.00",
    "resting_blood_pressure":"115",
    "cholesterol_level":"211.00",
    "fasting_blood_sugar_level":"0.00",
    "rest_ecg":"1.00",
    "max_heart_rate_achieved":"150",
    "exercise_induced_angina":"1.00",
    "st_depression":"1.00",
    "st_slope":"1.00",
    "num_major_vessels":"4.00"
    }
    ]
    '''
}

print_json = json.loads(test_data)


def PredictionAPI(input_data):
    # checking using a ML algorithm
    
    # change the input data to a numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the numpy array as we are predicting for only on instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = model.predict(input_data_reshaped)
    print(prediction)

    if prediction[0] == 0:
        NHDRes = {
            'output':'This Person is NOT Likely to have a Heart Disease',
            'status': 200
        }
        return NHDRes, 200
    else:
        HDRes = {
            'output':'This Person is Likely to have a Heart Disease',
            'status': 200
        }
        return HDRes, 200

PredictionAPI(input_data)