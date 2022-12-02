def lgr():
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

    df = pd.read_csv("C:/Users/Julian/Documents/Simulation-Dichtprüfung/Simulation-Dichtprüfung/simulation-st5.csv", sep=';')
    #df = pd.read_csv(r'C:\Users\pauls\OneDrive\InnoProjekt\02_Daten\Simulation-Dichteprüfung\simulation-st5.csv', sep=';')

    df_reduced = df[(df.status != 3) & (df.status != 0)]

    X_new = df_reduced[['druck', 'leck']]
    y_new = df_reduced['status']

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X_new)

    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_new, train_size=0.75)

    lgr = LogisticRegression(random_state=42)
    lgr.fit(X_train, y_train)

    return scaler, lgr

def classification(druck_wert, leck_wert,scaler1,lgr1):
    vals_scaled = scaler1.transform([[druck_wert, leck_wert]])
    pred = lgr1.predict(vals_scaled).astype('int')

    return pred[0]