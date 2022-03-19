from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash


class Patient(db.Document):
    username = db.StringField(required=True, unique=True)
    age = db.IntField(required=True)
    sex = db.IntField(required=True)
    chest_pain_type = db.FloatField(required=True)
    resting_blood_pressure = db.FloatField(required=True)
    cholesterol_level = db.FloatField(required=True)
    fasting_blood_sugar_level = db.FloatField(required=True)
    rest_ecg = db.FloatField(required=True)
    max_heart_rate_achieved = db.FloatField(required=True)
    exercise_induced_angina = db.FloatField(required=True)
    st_depression = db.FloatField(required=True)
    st_slope = db.FloatField(required=True)
    num_major_vessels = db.FloatField(required=True)
    thalassemia = db.FloatField(required=True)


# New user document created everytime a new user signs up
class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=8)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)
