from flask import Flask

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/patient-list'
}


app.run(debug=True)