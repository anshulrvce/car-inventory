# car-inventory
inventory management for cars


## Running the application using docker
1. Install docker for mac or desktop on your machine
2. clone the git repo or download as zip and extract the zip
3. once docker is up and running, build the docker image using by running `docker-compose build`
4. Run `docker-compose up` to start the application
5. You can browse the application api swagger explorer on `http://localhost:8080/api-docs` and try out the apis

## Running the application without docker
1. clone the git repo or download as zip and extract the zip
2. make sure nodejs verision 12 or above is installed on your machine
3. make sure typescript is installed globally
4. go the cloned repo folder and run `npm install` to install node dependencies
5. update the "MONGOOSE_URL" to your mongodb instance in .env file
6. Run `npm start` to start the application
7. You can browse the application api swagger explorer on `http://localhost:8080/api-docs` and try out the apis


