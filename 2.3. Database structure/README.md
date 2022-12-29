# 2.3. Database Structure in MongoDB 📐

## Unit Tasks 📑

- Design and create various sample database systems in MongoDB for managing an eyewear store and an online pizza store by means of a JavaScript script.
- Add a diagram to help visualize the various database collections and specify their relationships.

## Usage instructions 👇

This section of the project contains two folders: 

- **diagrams** -> contains diagrams for each database;
- **scripts** -> contains the JS scripts. 

### 🔥 Run the code 

- To execute the JS scripts, use the MongoDB shell. Run the following command for each .js file:

````
mongosh localhost:27017/test [my_jsfile.js]
````

This will do **three** things:

1. Connect to a local instance running on the default port. 
    * **NOTE** If your MongoDB instance is NOT running on 'localhost:27017', you'll need to edit the connection string.
2. Connect to the 'my_DB_NAME' database.
3. Populate the DB's collections with sample documents specified in the JS script.

### 🤓 Testing the code

Database creation and document loading can be easily verified in various ways: 

+ **A. MongoDB Shell (mongosh)**

> **Step 1** - start the MongoDB shell by running:

````
mongosh
````
**NB:** Depending on your installation package, mongosh may not be available. Check official documentation.

> **Step 2** - query the database and its collections using mongosh commands by selecting your database:

````
show dbs
use my_db
````

For more info on mongosh usage and commands [here](https://www.mongodb.com/docs/mongodb-shell/run-commands/).

+ **B. MongoDB Compass**

As an alternative to running command-line queries in the MongoDB shell, you can use [MongoDB Compass](https://www.mongodb.com/products/compass), an interactive, graphical tool. This will help you create databases, collections as well as analyze and manipulate data in MongoDB.