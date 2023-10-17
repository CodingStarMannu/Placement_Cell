// const mongoose = require('mongoose');
// // mongoose.set('strictQuery',true);
// // const dotenv = require('.env');
// const DB = 'mongodb+srv://manojpant:Mannu%405972@mannudb.nymicw0.mongodb.net/?retryWrites=true&w=majority';


// mongoose.connect(DB, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

// db.once('open', function () {
// 	console.log('Connected to Database :: Mongodb');
// });

// module.exports = mongoose;



const mongoose = require('mongoose');
const Mongo_URL = 'mongodb+srv://manojpant:Mannu%405972@mannudb.nymicw0.mongodb.net/?retryWrites=true&w=majority';
// Connect to the MongoDB database using the Mongo_URL environment variable
mongoose.connect(Mongo_URL)
  .then(() => {
    console.log("Connected to DB 😊");
  })
  .catch((err) => {
    console.log("Err in connecting to DB 😐", err);
  });



// dotenv.config({ path: 'config/.env' });

//connecting mongoose with database
//I stored MONGODB_URI in my system variable for security reason. vable name MONGODB_URI followed by your mongo atlas link
//for local use you can write this code
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');

// mongoose.connect(DB, {
// 	useNewUrlParser: true,
// 	useCreateIndex:true,
//  	useUnifiedTopology: true,
// 	useFindAndModify:false
// }).then(() => {
// 	console.log('connection successful');
// }).catch((err) => console.log('no connection',err));
