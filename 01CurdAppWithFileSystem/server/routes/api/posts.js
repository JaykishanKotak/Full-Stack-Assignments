const express = require('express')
const router = express.Router();

const mongodb = require("mongodb");

const dbConnectionUrl = "mongodb://localhost:27017/proj01";


// Get Request

router.get('/', async (req, res) => {
	await loadPostsCollection(function(dbCollection){
			dbCollection.find().toArray(function(err, result){
				res.send(result);
			});

		});

	});

// Add Request
 
router.post('/', async (req, res) => {
	await loadPostsCollection(function(dbCollection){
		 dbCollection.insertOne({
			text: req.body.text,
			createdAt: new Date()
			 
		});
	
	});
	res.status(201).send();

});

//Delete Request

router.delete("/:id", async(req, res)=> {
	await loadPostsCollection(function(dbCollection){
		 
		 dbCollection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
		
	});

	res.status(200).send();
	
});
 

// Get the Collection from DB 
 
async function loadPostsCollection(
    successCallback){
	mongodb.MongoClient.connect(dbConnectionUrl,function(err, dbInstance){
			const dbObject = dbInstance.db('test');
        		const dbCollection = dbObject.collection('posts');
            		console.log("[MongoDB connection] SUCCESS");
			successCallback(dbCollection);
	});

}

module.exports = router;