const mongoose = require('mongoose');

const DB = 'mongodb+srv://manianil8423:Anil&2000@cluster0.p4pyoxg.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;









