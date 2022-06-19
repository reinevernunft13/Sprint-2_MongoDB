
db.restaurants.find({});
db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({},{_id:0, restaurant_id:1, name:1, borough:1, address.zipcode:1});
db.restaurants.find({borough: "Bronx"});
db.restaurants.find({borough: "Bronx"}).limit(5);
db.restaurants.find({borough: "Bronx"}).skip(5).limit(5);
db.restaurants.find({grades:{$elemMatch: {score: {$gt: 90}}}});
db.restaurants.find({address.coord: {$lt: -95.754168}});
db.restaurants.find({address.coord: {$lt: -95.754168}});
db.restaurants.find({$and: [{cuisine: {$ne :"American "}}, {grades.score: {$gt: 70}}, {address.coord : {$lt: -65.754168}}]});
db.restaurants.find({cuisine: {$ne: "American "}, grades.score: {$gt: 70}, address.coord: {$lt : -65.754168} });
db.restaurants.find({cuisine: {$ne: "American "}, grades.grade: "A", borough: {$ne: "Brooklyn"}}).sort({cuisine: -1});
db.restaurants.find({name: {$regex: /^Wil/}}, {restaurant_id: 1, name: 1, cuisine: 1});
db.restaurants.find({name: {$regex: /ces$/}}, {restaurant_id: 1, name: 1, cuisine: 1});
db.restaurants.find({name: {$regex: /Reg/i}}, {restaurant_id: 1, name: 1, cuisine: 1});
db.restaurants.find({borough: "Bronx" , $or: [{cuisine: "American "}, {cuisine: "Chinese"}]}); 
db.restaurants.find({borough: {$in: ["Staten Island","Queens","Bronx","Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({borough :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({grades.score: {$not {$lte: 10}}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({$and: [{ cuisine: {$ne: "American "}}, {cuisine: {$ne: "Chinese"}}, {$or: [{cuisine: {$regex: /fish/i}}, {name: {$regex: /^Wil/i}}]} ] }, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurants.find({ grades: {$elemMatch: { date: ISODate("2014-08-11T00:00:00Z"), grade: "A", score: 11 }}}, {restaurant_id: 1, name: 1, grades: 1});
db.restaurants.find({grades: {elemMatch: {date: ISODate("2014-08-11T00:00:00Z"), grade: "A", score: 9 }}}, {restaurant_id: 1, name: 1, grades: 1});
db.restaurants.find({address.coord: {$gt : 42, $lte : 52}}, {restaurant_id: 1, name: 1, address: 1});
db.restaurants.find().sort({name: 1});
db.restaurants.find().sort({name: -1});
db.restaurants.find().sort({cuisine: 1, borough: -1});
db.restaurants.find({address.street: {$ne: null}});
db.restaurants.find({address.coord: {$type: "double"}});
db.restaurants.find({grades.score: {$mod: [7, 0]}}, {restaurant_id: 1, name: 1, grades: 1});
db.restaurants.find({name: {$regex: /mon/i}}, {name: 1, borough: 1, address.coord: 1, cuisine: 1});
db.restaurants.find({name: {$regex: /^Mad/i}}, {name: 1, borough: 1, address.coord: 1, cuisine: 1});




