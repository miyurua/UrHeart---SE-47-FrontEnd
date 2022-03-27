import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import numpy as np
import pandas as pd
import seaborn as sns

#   loading the ML model
model = pickle.load(open('Notebook/model.pkl', 'rb'))


def PredictionAPI(input_data):
    # checking using a ML algorithm
    input_data = (49, 0, 3, 160, 180, 0, 0, 156, 0, 1, 2)

    # change the input data to a numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    # reshape the numpy array as we are predicting for only on instance
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = model.predict(input_data_reshaped)
    print(prediction)

    if prediction[0] == 0:
        print('This Person not suffering from a Heart Disease')
    else:
        print('This Person suffering from a Heart Disease')
