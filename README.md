# car-inventory
inventory management for cars
This application provides a rest apis to manager car invetory by adding, updating, getting and deleting a car information from inventory.

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



# further enhancements
1. enhance the error handler to handle all errors.
2. think of a better primary key (maybe serial number or create uuid) to use instead of default _id for all api queries
3. add testing (unit, integration)
4. Use typescript well (use of interfaces, typed parameters)
5. Data transformation (during input and output)

Note:
for "Updaten single properties of a single car (not a full replace operation!)" i was not very clear if i need to implement api which will only allow updating a single property at a time. so, the api i have implemented will allow you to update one or more property at a time and will not allow you to update metadata properties i.e. brand, modelName, modelyear
