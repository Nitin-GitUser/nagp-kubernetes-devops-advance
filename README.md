# node-app

- Install dependencies:
     $ npm install

- Set Environment variable:
     MYSQL_HOSTNAME
     MYSQL_USER
     MYSQL_PASSWORD
     MYSQL_DATABASE
     DB_PORT

- Run the app:
     $ npm start
     $ Go to http://localhost:7100

#  Kubernetes commands to deploy the app.
     
- kubectl apply -f Deployments/namespaces.yaml
- kubectl apply -f Deployments/secrets.yaml  -f Deployments/configmap.yaml
- kubectl apply -f Deployments/dbStatefulset.yaml
- kubectl apply -f Deployments/deployments.yaml