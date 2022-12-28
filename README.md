# Sprint-2: NoSQL Databases - MongoDB 📖

In this unit, we'll be introduced to non-relational or 'NoSQL' databases through MongoDB. NoSQL, or 'not only SQL', is an approach to database design that provides an alternative mechanism for storing and querying data to traditional SQL databases, such as MySQL. Instead of storing data records in tabular format, MongoDB stores them in collections of documents; that is, in JSON-like structures -- specifically, in BSON documents.

## 🔧 Requirements

- [Node.Js](https://nodejs.org/en/download/)
- MongoDB -> Install MongoDB Community Edition. Installation details [here](https://www.mongodb.com/docs/manual/administration/install-enterprise/)

## 🗒️ Unit Tasks 
### 2.3. Database Structure

- Create various sample MongoDB databases (eyewear store, pizza store) by means of a JavaScript script.
- Add a diagram to help visualize the various database collections and specify their relationships.

### 2.4. MongoDB Queries

- Practice querying data in MongoDB by means of a test collection (see file 'restaurants.json').

## 🚀 Usage instructions   

### Run the code

- To execute the JS script, you'll need to run the following command for each .js file:

````
mongo localhost:27017/test [my_jsfile.js]
````

- This will do **three** things:

    1. Connect to a local instance running on the default port. 
        * If your MongoDB instance is NOT running on 'localhost:27017', you must edit the connection string.
    2. Connect to the 'my_DB_NAME' database.
    3. Populate the DB's collections with sample documents specified in the JS script.

### Testing 

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
















