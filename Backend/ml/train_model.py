import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

# Dummy dataset

data = {
    "packet_size": [100, 2000, 3000, 150, 2500],
    "connections": [1, 50, 100, 2, 70],
    "label": [0, 1, 1, 0, 1]
}


df = pd.DataFrame(data)

X = df[["packet_size", "connections"]]
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier()
model.fit(X_train, y_train)

predictions = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, predictions))

joblib.dump(model, "intrusion_model.pkl")