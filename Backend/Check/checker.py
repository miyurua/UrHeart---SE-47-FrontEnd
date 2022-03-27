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
#input_data = (48, 0, 2,	120, 284, 0, 0, 120, 0,	0.0, 1)

# input_data = X

#JSON Test Data
test_data = {
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "age": "45",
        "sex": "0",
        "chestPainType": "2",
        "restingBP": "120",
        "cholestrol": "284",
        "fastingBloodSugar": "0",
        "restingECG": "0",
        "maxHeartRate": "120",
        "exerciseAngina": "0",
        "oldpeak": "0",
        "STslope": "1"    
    }
}

s1 = json.dumps(test_data)
print_json = json.loads(s1)

list = print_json['body']
# print(list)
# print(len(list))
# print(str(list['age']))

input_data = (float(list['age']), float(list['sex']), float(list['chestPainType']),	float(list['restingBP']), float(list['cholestrol']), float(list['fastingBloodSugar']), float(list['restingECG']), float(list['maxHeartRate']), float(list['exerciseAngina']),	float(list['oldpeak']), float(list['STslope']))
print(input_data)

def PredictionAPI(input_data):
    # checking using a ML algorithm
    
    # change the input data to a numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the numpy array as we are predicting for only on instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = model.predict(input_data_reshaped)
    print(prediction)

    if prediction[0] == 0:
        print('This Person is NOT Likely to have a Heart Disease')
        NHDRes = {
            'output':'This Person is NOT Likely to have a Heart Disease',
            'status': 200
        }
        return NHDRes, 200
    else:
        print('This Person is Likely to have a Heart Disease')
        HDRes = {
            'output':'This Person is Likely to have a Heart Disease',
            'status': 200
        }
        return HDRes, 200

PredictionAPI(input_data)