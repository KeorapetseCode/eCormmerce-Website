const express = require('express');

const app = express();

app.get('/', (req, res) =>{
	res.send("Index Page");
});


app.get('/api/customers', (req, res) => {
	const customers = [
		{id: 1, firstname: 'John', lastname: "Dan"},
		{id: 2, firstname: 'Steve', lastname: "Fllflf"}
	];
	res.json(customers);
});

const port = 5000;

app.listen(port);