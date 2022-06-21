//CREATE DATABASE
/*NB: - the use() method, like the use <MY_DB> command, creates a new database provided it doesn't already exist;
      - a db won't be created unless data a collection is inserted.
*/
use('mongo_opticalstore');
//CREATE COLLECTION
db.createCollection('eyewear');

//INSERT DATA
db.eyerwear.insertMany([
    {
    "_id": {
      "$oid": "62b0458fe26f84c75ae436c4"
    },
    "brand": "Rayban",
    "lefteye_grad": "1.00",
    "righteyer_grad": "1.25",
    "lenses_color": "transparent",
    "frame_type": "plastic",
    "frame_color": "black",
    "value": "295.99",
    "customer": {
      "name": "Cristina García",
      "address": {
        "street": "Carrer del Sol",
        "number": "12",
        "floor": "2",
        "door": "1",
        "city": "Barcelona",
        "zip_code": "08024",
        "country": "Spain"
      },
      "phone": "+3466777881",
      "email": "cristinagarcia@gmail.com",
      "date_registration": "2021-01-22"
    },
    "supplier": {
      "name": "Europe Eyewear Distribution, Ltd.",
      "address": {
        "street": "Langton Road",
        "number": "85",
        "zip": "L31 8BU",
        "city": "Liverpool",
        "country": "United Kingdom"
      },
      "phone": "+441515262626",
      "fax": "+441515262628",
      "tin": "1234567899"
    }
  },
  {
    "_id": {
      "$oid": "62b048f5e26f84c75ae436c5"
    },
    "brand": "Gucci",
    "lefteye_grad": null,
    "righteyer_grad": null,
    "lenses_color": "black",
    "frame_type": "plastic",
    "frame_color": "animal footprint",
    "value": "295.99",
    "customer": {
      "name": "Marc Pérez",
      "address": {
        "street": "Carrer Lluna",
        "number": "31",
        "floor": "4",
        "door": "2",
        "city": "Barcelona",
        "zip_code": "08031",
        "country": "Spain",
        "referring_customer": null
      },
      "phone": "+3461177881",
      "email": "marcperez@hotmail.com",
      "date_registration": "2021-01-22"
    },
    "supplier": {
      "name": "Iberica Lentes, S.A",
      "address": {
        "street": "Carrer Vallès",
        "number": "56",
        "zip": "08130",
        "city": "Mataró",
        "country": "Spain"
      },
      "phone": "+346317070",
      "fax": "+34632191919",
      "tin": "ES9900012984"
    }
  }
]);