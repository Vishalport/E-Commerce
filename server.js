const express = require('express');
const app = express();
require('./db/dbconnection');
require("./admin/admin")
require("./StaticContaint/StaticContaint");
const userRouter = require("./routes/userRouter");
// const fileupload = require("express-fileupload");
const adminRouter = require('./routes/adminRouter');
const CronJob = require('cron').CronJob;

app.use(express.json({ limit: "50mb" }));

// app.use(fileupload({
//     useTempFiles: true
// }));
 

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
                                              
app.use("/api/v1/user", userRouter, (req, res) => {
});

app.use("/user/", userRouter, (req, res) => {
}); 

app.use("/admin", adminRouter, (req, res) => {
}); 

// localhost:300/admin/static/contain/hdh/hjhd/editStaticContain..
// localhost:3000/user/userlogin


// localhost:3000/user/contain/hdh/hjhd/editStaticContain


 
var job = new CronJob(
	'0 0 */3 * *',
	function() {
		console.log('You will see this message every second');
	},
	null,
	true,
	'America/Los_Angeles'
);


app.listen(4000,()=>{
    console.log("server is running on 4000");
});







// express, mongose, donenv, node-geocoder, cord(cross domian suport) 
// mapQuest API 


// backend...
/* node-geocoder provide.... { 
		1. lattitude..
		2. longitude...
		3. city....
		4. state code...
		5. zip code...
}
*/


/* frontend = {
	1. mapBox [ its free]  and we need to chouse the {
		1. web jshon
		2. apple
		3. android 

			{
				1. its provide NPM
				2. its provode CDN
			}
	}

}
*/
/*


in the Project Order API : user will do order and the order DB will hold the data and at the same time the vender product wuanity will update according to the user order

Ex : user age doing order 2 iphone.
if the iph0ne is in the stock(10-Iphone) the item will order and the vender iphone will update as 8
db.user_item.insertMany( [
    { "_id" : 1, "Name" : "apple", "price" : 20, "quantity" : 10 },
    { "_id" : 2, "Name" : "banana", "price" : 15, "quantity" : 11 },
    { "_id" : 3, "Name" : "pear", "price" : 90, "quantity" : 5},
    { "_id" : 4, "Name" : "coconut", "price" : 50, "quantity" : 8 },
 ] )

 db.admin_item.insertMany( [
    { "_id" : 1, "product_name" : "apple", "total" : 120 },
    { "_id" : 2, "product_name" : "banana", "total" : 80 },
    { "_id" : 3, "product_name" : "pear", "total" : 60 },
    { "_id" : 4, "product_name" : "coconut", "total" : 70 },
    { "_id" : 5, "product_name": "gouva"},
 ] )


 db.user_item.aggregate( [
   {
     $lookup:
       {
         from: "admin_item",
         localField: "Name",
         foreignField: "product_name",
         as: "product_docs"
       }
  }
] )

 */

/**
 * 
 * db.House.insertMany( [
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 3, "Rooms" : "4", "Balcony" : 3},
                { "location" : "Delhi", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : false, "Folor" : 4, "Rooms" : "4", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "1", "Balcony" : 0},
                { "location" : "Delhi", "price": "10000",  "Booking" : false, "Folor" : 4, "Rooms" : "2", "Balcony" : 3},
                { "location" : "Delhi", "price": "20000",  "Booking" : false, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 3, "Rooms" : "4", "Balcony" : 3},
                { "location" : "Delhi", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : false, "Folor" : 4, "Rooms" : "4", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "1", "Balcony" : 0},
                { "location" : "Delhi", "price": "10000",  "Booking" : false, "Folor" : 4, "Rooms" : "2", "Balcony" : 3},
                { "location" : "Delhi", "price": "20000",  "Booking" : false, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 1, "Rooms" : "2", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "2", "Balcony" : 2},
                { "location" : "Delhi", "price": "5000",  "Booking" : false, "Folor" : 11, "Rooms" : "1", "Balcony" : 1},
                { "location" : "Delhi", "price": "25000",  "Booking" : true, "Folor" : 10, "Rooms" : "2", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 11, "Rooms" : "3", "Balcony" : 2},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "10000",  "Booking" : false, "Folor" : 21, "Rooms" : "2", "Balcony" : 2},
                { "location" : "Delhi", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Delhi", "price": "25000",  "Booking" : true, "Folor" : 3, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 3, "Rooms" : "4", "Balcony" : 3},
                { "location" : "mumbai", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : false, "Folor" : 4, "Rooms" : "4", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "1", "Balcony" : 0},
                { "location" : "mumbai", "price": "10000",  "Booking" : false, "Folor" : 4, "Rooms" : "2", "Balcony" : 3},
                { "location" : "mumbai", "price": "20000",  "Booking" : false, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 1, "Rooms" : "2", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "2", "Balcony" : 2},
                { "location" : "mumbai", "price": "5000",  "Booking" : false, "Folor" : 11, "Rooms" : "1", "Balcony" : 1},
                { "location" : "mumbai", "price": "25000",  "Booking" : true, "Folor" : 10, "Rooms" : "2", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 11, "Rooms" : "3", "Balcony" : 2},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : false, "Folor" : 21, "Rooms" : "2", "Balcony" : 2},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "25000",  "Booking" : true, "Folor" : 3, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 14, "Rooms" : "2", "Balcony" : 1},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 5, "Rooms" : "1", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : false, "Folor" : 6, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "15000",  "Booking" : true, "Folor" : 7, "Rooms" : "2", "Balcony" : 2},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 2},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "mumbai", "price": "10000",  "Booking" : true, "Folor" : 3, "Rooms" : "4", "Balcony" : 3},
                { "location" : "mumbai", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Hariyana", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : true, "Folor" : 3,  "Rooms" : "4", "Balcony" : 3},
                { "location" : "Hariyana", "price": "15000",  "Booking" : true, "Folor" : 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : false, "Folor": 4,  "Rooms" : "4", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "1", "Balcony" : 0},
                { "location" : "Hariyana", "price": "10000",  "Booking" : false, "Folor": 4,  "Rooms" : "2", "Balcony" : 3},
                { "location" : "Hariyana", "price": "20000",  "Booking" : false, "Folor": 10, "Rooms" : "3", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : true, "Folor" : 1,  "Rooms" : "2", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : true, "Folor" : 10, "Rooms" : "2", "Balcony" : 2},
                { "location" : "Hariyana", "price": "5000",  "Booking" : false, "Folor" : 11, "Rooms" : "1", "Balcony" : 1},
                { "location" : "Hariyana", "price": "25000",  "Booking" : true, "Folor" : 10, "Rooms" : "2", "Balcony" : 3},
                { "location" : "Hariyana", "price": "10000",  "Booking" : true, "Folor" : 11, "Rooms" : "3", "Balcony" : 2},
            ] );
 */