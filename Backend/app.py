from flask import Flask

app = Flask(__name__)


@app.route("/")
def home_page():
    return {"Home Page": ["Profile", "Predict Heart Diseases", "Doctors List", "Upload ECG"]}, 200


@app.route("/profile")
def profile_page():
    return {"Profile Page": ["Name", "Username", "Email", "Gender", "DOB"]}, 200


@app.route("/predict-heart-disease")
def medical_info_page():
    return {"Predict Heart Disease Page": ["age", "gender", "chest pain type", "..."]}, 200


@app.route("/doctors")
def doctors_page():
    return {"Doctors List": ["Doctor ID", "Doctor Name", "Hospital", "Contact"]}, 200


@app.route("/ECG-Page")
def ecg_page():
    return {"ECG Upload": ["Browse"]}, 200
  
@app.route("/About")
def about_page():
    return "About"


if __name__ == '__main__':
    app.run(debug=True)