import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

# Kaffeedatensatz einlesen 
df = pd.read_csv('./02_Daten/Kaffeemaschine/sp_xdk.csv', sep=';')

ts = df.iat[0,0]
correct_date = datetime.utcfromtimestamp(ts/1000).strftime('%Y-%m-%d %H:%M:%S')

# Richtige Zeit für alle Einträge
df['time'] = [datetime.utcfromtimestamp(x/1000) for x in df['time']]

df.head()
df.tail()

# insgesamt 5.610.779 Einträge
df.info()

# keine fehlenden Werte
df.isnull().sum()

# einfache statistische Werte anzeigen lassen. Ausreißer bei y?
df.describe()

# ein Eintrag mit ungewöhnlich hohem y
df[df['y']>100]

# ein Eintrag mit ungewöhnlich niedrigem y
df[df['y']<-100]

# diese zwei Einträge entfernen
df.drop(df[df.y < -100].index, inplace=True)
df.drop(df[df.y > 100].index, inplace=True)
df.reset_index(inplace=True)

# Button pressed ist immer False -> kann gelöscht werden
df.buttonpressed.value_counts()
df.drop(['buttonpressed'], axis=1, inplace=True)

# starke negative Korrelation zwischen y und z. Ansonsten nur schwache Korrelation
df[['x','y','z']].corr()
sns.heatmap(df[['x','y','z']].corr(), annot=True, cmap = 'Reds')
plt.show()


plt.plot(df.time, df.x, color='red', label='X')
plt.plot(df.time, df.y, color='blue', label='Y')
plt.plot(df.time, df.z, color='green', label='Z')

plt.legend()
plt.show()

