const express = require('express');

const app = express();


app.get('/', (req, res) =>{
	res.send("Index Page");
});


app.get('/api', (req, res) => {

	res.send("Text from server");
});


const port = 5001;

app.listen(port);