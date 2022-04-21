const express = require('express');
const path = require('path');
const apiRouter = require('./apiRouter.js');
const app = express();

app.use(express.static(__dirname + '/../frontend'));

app.use('/getPuzzle',apiRouter);

app.listen(8080,() => {
	console.log('Server listening at localhost:8080');
}
)


