var express = require('express');
var router = express.Router();
/*var MongoClient = require('mongodb').MongoClient
		, assert = require('assert');*/


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Enriva S.A. - Expertos en Soldadura' });
});

router.get('/debug',function(req,res){
	res.render('tpl/sierOrb.jade');
});

router.get('*/:route',function(req,res){
	var filename = req.params['0'];
/*	var insertDocuments = function(db,callback){

	var collection = db.collection('documents');
	collection.insert([
			{a:1},{b:2},{c:3}
		], function(err,result){
			assert.equal(err,null);
//			assert.equal(3,result.result.n);
//			assert.equal(3,result.ops.legnth);
			console.log('Inserted 3 documents into the document collection');
			callback(result);
		});
	}

	var getDocs = function(db,callback){
		var collection = db.collection('documents');
		collection.find({}).toArray(function(err,docs){
			console.log("Found the following records");
			console.dir(docs)
			callback(docs);
		});
	}

	var url = 'mongodb://localhost:27017/'
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected correctly to server");*/

		/*insertDocuments(db, function() {
			db.close();
		});*/

/*		getDocs(db,function(){
			db.close();	
		});

	});*/

	res.render('tpl/'+filename);
});

module.exports = router;
