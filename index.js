const express = require('express');

const port = process.env.PORT || 8000;



const app = express();




// listen on port
app.listen(port, function (error) {
	if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});