import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

import seaborn as sns
from datetime import datetime

import matplotlib.dates as mdates
from matplotlib.dates import DateFormatter

from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import warnings


df = pd.read_csv('../02_Daten/Simulation-Dichteprüfung/simulation-st5.csv', sep=';')
df['date'] = [datetime.utcfromtimestamp(x/1000) for x in df['time']]

df_reduced = df[(df.status != 3) & (df.status != 0)]

X_new = df_reduced[['druck', 'leck']]
y_new = df_reduced['status']


X_long = pd.concat([X_new]*5, ignore_index=True)
y_long = pd.concat([y_new]*5, ignore_index=True)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_new)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_new, train_size=0.75)

lgr = LogisticRegression(random_state=42)
lgr.fit(X_train, y_train)

right_class = 0
wrong_class = 0
i=0

X_long.reset_index(drop=True, inplace=True)
y_long.reset_index(drop=True, inplace=True)

with warnings.catch_warnings():
    warnings.simplefilter("ignore")

    for index, row in X_long.iterrows():
        row_scaled = scaler.transform([row])
        lgr.predict(row_scaled)

        if (lgr.predict(row_scaled) == y_long.iloc[index]):
            right_class += 1
        else:
            wrong_class += 1
        
        
        if (i % 1000 == 0):
            print("bisher richtig vorhersagte Einträge:", right_class)
            print("bisher falsch vorhersagte Einträge:", wrong_class)
            print(np.round(right_class/(right_class+wrong_class)*100, 2), "% richtig vorhergesagt")
            print('----------------------')
        
        i += 1

with warnings.catch_warnings():
    warnings.simplefilter("ignore")
    while True:
        try:
            druck_wert = float(input('Druck-Wert eingeben:'))
            leck_wert = float(input('Leck-Wert eingeben:'))
            if (druck_wert == 123 or leck_wert == 123):
                break

            vals_scaled = scaler.transform([[druck_wert, leck_wert]])
            pred = lgr.predict(vals_scaled).astype('int')
            print('Ihre Eingaben sind: \n Druckwert:', druck_wert, ' \n Leckwert:', leck_wert)
            print('Der vorhergesagte Status für dieses Bauteil ist:', pred[0])
            print('----------')

        except ValueError:
            print("Bitte eine Zahl eingeben")