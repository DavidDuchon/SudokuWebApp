const express = require('express');
const apiRouter = express.Router();
const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

function randomNumber(min,max){
	return (Math.floor(Math.random()*(max-min)) + min);
}

async function getPuzzle(difficulty,count){

	await client.connect();

	const database = client.db('sudoku');

	const collection = database.collection(difficulty.toLowerCase());

	const document = await collection.findOne({_id:{$eq:randomNumber(0,count)}});

	return document;
}


apiRouter.get('/:name',async function(req,res){
	const difficulty = req.params.name;
	let count;

	if (difficulty == 'Easy'){
		count = 100;
	}else if (difficulty == 'Medium'){
		count = 60;
	}else{
		count = 20;
	}

	const puzzle = await getPuzzle(difficulty,count);

	console.log(puzzle);

	res.json(puzzle);
});


module.exports = apiRouter;
		

