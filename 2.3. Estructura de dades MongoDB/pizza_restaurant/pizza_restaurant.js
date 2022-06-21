//CREATE DATABASE
//NB: the use() method, like the 'use <MY_DB>' command, creates a new database provided it doesn't already exist.

use('mongo_pizzarestaurant');

//CREATE COLLECTIONS
db.createCollection('menu_items');
db.createCollection('stores');
db.createCollection('customers');

//DATA INSERT
db.menu_items.insertMany([
    {
        "_id": {
          "$oid": "62b08c73df92462da6cf8e7d"
        },
        "type_item": "pizza",
        "name_item": "margherita",
        "description": "description pizza margherita",
        "image": "URL_1",
        "value": "11.99"
      },{
        "_id": {
          "$oid": "62b08d7cdf92462da6cf8e7e"
        },
        "type_item": "pizza",
        "name_item": "quattro stagioni",
        "description": "description pizza quattro stagioni",
        "image": "URL_2",
        "value": "13.99"
      },{
        "_id": {
          "$oid": "62b08dbddf92462da6cf8e7f"
        },
        "type_item": "drink",
        "name_item": "soda",
        "description": "description soda",
        "image": "URL_3",
        "value": "2.50"
      }]
);

db.stores.insertMany([
        [{
            "_id": {
              "$oid": "62b17451878e28a5e3faa2ee"
            },
            "address": "Carrer Provença, 217",
            "zip_code": "08036",
            "town": "Barcelona",
            "province": "Barcelona",
            "employees": [
              {
                "first_name": "Alvaro",
                "last_name": "García",
                "ssn": "45566711A",
                "phone": "+34611998811",
                "position": "delivery_person"
              },
              {
                "first_name": "Paolo",
                "last_name": "Mancuso",
                "ssn": "X2334455J",
                "phone": "+34611012234",
                "position": "cook"
              }
            ]
          }]
    ]);
db.custormers.insert(
    [{
        "_id": {
          "$oid": "62b17451878e28a5e3faa2ee"
        },
        "address": "Carrer Provença, 217",
        "zip_code": "08036",
        "town": "Barcelona",
        "province": "Barcelona",
        "employees": [
          {
            "first_name": "Alvaro",
            "last_name": "García",
            "ssn": "45566711A",
            "phone": "+34611998811",
            "position": "delivery_person"
          },
          {
            "first_name": "Paolo",
            "last_name": "Mancuso",
            "ssn": "X2334455J",
            "phone": "+34611012234",
            "position": "cook"
          }
        ]
      }]
);

