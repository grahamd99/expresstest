
const express = require('express')
const app = express()
const port = 3000

app.get('/repeat/:message/:times', (req, res) => {
	
	var times = req.params.times;
	var word = req.params.message;
	var messageBack = "";
	
	for ( var i = 0 ; i < times; i++ ){
			messageBack += word + " ";
		}

	res.send( messageBack )
})
	
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))