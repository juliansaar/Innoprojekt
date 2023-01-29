# Innoprojekt
Innovation project about industrial data stories <br>
If you need the credentials for the prod database, please contact one of the Contributers

## Local Development Angular
### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Install all necessary node packages:

```
cd data_stories_frontend
npm install
```

Run the application:

```
cd data_stories_frontend
ng serve
```


## Deploy Frontend to Azure

ng build --configuration=production

deploy the generated folder in dist/data_stories_frontend to the Azure Web App 

[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/get-npm

## Local Development Flask

### Prerequisites

```
pip install -r requirements.txt
```

Run the backend:

```
cd data_stories_backend
flask run
```

## Deploy Backend to Azure
Push your changes and merge into main:
```
git push
```
Connect in linux shell to Azure VM via ssh:
```
sudo ssh -i ~/.ssh/testd_key.pem azureuser@20.107.50.230
```
Pull the changes:
```
git pull
```
Stop the gunicorn3 server:
```
sudo pkill -f gunicorn3
```
Restart the gunicorn3 server:
```
gunicorn3 --workers=3 app:app --deamon
```
