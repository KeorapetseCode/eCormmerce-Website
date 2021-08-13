const express = require('express');

const app = express();
/*
app.get('/', (req, res) =>{
	res.send("Index Page");
});
*/

app.get('/', (req, res) => {

	res.json({msg : "message from server"});
});


const port = 5001;

app.listen(port);