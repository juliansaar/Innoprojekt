# Innoprojekt
Innovation project about industrial data stories

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
push your changes and merge into main
-> connect to Azure VM via ssh and pull the changes
-> restart the app
