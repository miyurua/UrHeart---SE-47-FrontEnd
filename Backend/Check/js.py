import json

test_data = {
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "age": "45",
        "sex": "85",
        "chestPainType": "25",
        "restingBP": "65",
        "cholestrol": "45",
        "fastingBloodSugar": "54",
        "restingECG": "75",
        "maxHeartRate": "12",
        "exerciseAngina": "12",
        "oldpeak": "65",
        "STslope": "30"    
    }
}

s1 = json.dumps(test_data)
print_json = json.loads(s1)

list = print_json['body']
# print(list)
# print(len(list))
# print(str(list['age']))


input_data = (float(list['age']), float(list['sex']), float(list['chestPainType']),	float(list['restingBP']), float(list['cholestrol']), float(list['fastingBloodSugar']), float(list['restingECG']), float(list['maxHeartRate']), float(list['exerciseAngina']),	float(list['oldpeak']), float(list['STslope']))