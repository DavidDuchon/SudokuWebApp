const express = require('express');
const path = require('path');
const apiRouter = require('./apiRouter.js');
const app = express();

app.use(express.static(__dirname + '/../frontend'));

app.use('/getPuzzle',apiRouter);

/*app.get('*',function(req,res,next){

	const options = {
		root: (__dirname +'/../frontend'),
	}

	res.sendFile('index.html',options,function(err){
		if (err){
			next(err);
		}
		else{
			console.log('Sent index.html')
		}
	});
});
*/
app.listen(8080,() => {
	console.log('Server listening at localhost:8080');
}
)


