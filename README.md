# Heart Failure Prediction System - UrHeart

**Introduction** 

Heart failure occurs when the heart muscles are unable to supply adequate blood flow around the
body due to certain heart conditions such as narrowed arteries in the heart or high blood pressure,
gradually leaving the heart too weak or stiff to fill and pump blood properly. 
When this happens, blood often backs up and fluid can build up in the lungs, causing
shortness of breath. At first, the heart stretches to contract more strongly and keep up with the
demand to pump more blood. Over time this happens, causing the heart to
become enlarged. Due to this contraction, these contracting cells of the heart get bigger and
increase the muscle mass also. Then the body tries to compensate in other ways. As an example,
the blood vessels narrow to keep blood pressure up, trying to make up for the heart’s loss of power.
These temporary measures mask the problem of heart failure, but they don’t solve it. 
Heart failure continues and worsens until these compensating processes no
longer work. Heart failure can involve the heart’s left side, right side or both sides. 
But it usually affects the left side of the heart first. There are four stages
of heart failure called stage A, stage B, stage C and stage D which range from high risk of
developing heart failure to advanced heart failure.

**Dataset**

The data set called “Heart Diseases” from University of California Irvine consists of 4 databases
of heart disease patients from Cleveland, Hungary, Switzerland, and the VA Long Beach. This
dataset mainly consists of patient’s, <br><br>
● Age <br>
● Gender <br>
● Chest Pain Type (#cp) <br>
-- Value 1: Typical Angina <br>
-- Value 2: Atypical Angina <br>
-- Value 3: Non-Anginal Pain <br>
-- Value 4: Asymptomatic <br>
● Resting Blood Pressure(#trestbps)<br>
● Serum Cholesterol in mg/dl (#chol)<br>
● Fasting Blood Sugar (#fbs)<br>
-- fbs > 120 mg/dl (1 = true; 0 = false)<br>
● Resting Electrocardiographic Results (#restecg)<br>
● Maximum Heart Rate Achieved(#thalach)<br>
● Exercise Induced Angina (#exang)<br>
-- 1 = yes; 0 = no<br>
● ST Depression Induced by Exercise Relative to Rest (#oldpeak)<br>
● The Slope of the Peak Exercise ST Segment(#slope)<br>
-- Value 1: upsloping<br>
-- Value 2: flat<br>
-- Value 3: down sloping<br>
● Number of Major Vessels (0-3) Colored by Fluoroscopy (#ca)<br>
3 = Normal; 6 = Fixed Defect; 7 = Reversible Defect (#thal)<br>
● Diagnosis of Heart Disease (angiographic disease status) (#num) - The Predicted Attribute.<br>
-- Value 0: < 50% diameter narrowing<br>
-- Value 1: > 50% diameter narrowing<br>
