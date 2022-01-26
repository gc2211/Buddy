const express = require('express');
const router = express.Router();
const pool = require('../conf');



// Read all users

router.get('/', (req, res) => {

	
//Getting a connection from the pool
pool.getConnection((err, connection) => {
	// Not connected!
	if (err) console.error(err);
		//Using the connection.
		//Change the query const according to your needs
		const query = 'SELECT * FROM users'
		connection.query(query, (err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send('Server error, could not fetch from DB');
			} else {
				res.status(200).send(data);
			}
		});

		//Realising the connection.
		connection.release();

		// Handle error after the release.
		if (err) console.error(err);

		// Don't use the connection here, it has been returned to the pool.
	})
});

//Read users by id

router.get('/:id', (req, res) => {
	console.log("hello");

	//Getting a connection from the pool
	pool.getConnection((err, connection) => {
		// Not connected!
		if (err) console.error(err);
		//Using the connection.
		//Change the query const according to your needs
		const query = 'SELECT * FROM users WHERE id = ?'
		connection.query(query,[req.params.id],(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send('Server error, could not fetch from DB');
			} else {
				res.status(200).send(data);
			}
		});

		//Realising the connection.
		connection.release();

		// Handle error after the release.
		if (err) console.error(err);

		// Don't use the connection here, it has been returned to the pool.
	})

});

 //Create a user
 
 router.post('/users', (req, res) => {
 
//Getting a connection from the pool
pool.getConnection((err, connection) => {
	// Not connected!
	if (err) console.error(err);
	//Using the connection.
	//Change the query const according to your needs
 

	//Realising the connection.
	connection.release();

	// Handle error after the release.
	if (err) console.error(err);

	// Don't use the connection here, it has been returned to the pool.
  })

});

//Update a user
 
router.patch('/users', (req, res) => {
 
	//Getting a connection from the pool
	pool.getConnection((err, connection) => {
		// Not connected!
		if (err) console.error(err);
		//Using the connection.
		//Change the query const according to your needs
	 
	
		//Realising the connection.
		connection.release();
	
		// Handle error after the release.
		if (err) console.error(err);
	
		// Don't use the connection here, it has been returned to the pool.
	  })
	
	});
  
	//Delete a user
 
	router.delete('/users', (req, res) => {
 
		//Getting a connection from the pool
		pool.getConnection((err, connection) => {
			// Not connected!
			if (err) console.error(err);
			//Using the connection.
			//Change the query const according to your needs
		 
		
			//Realising the connection.
			connection.release();
		
			// Handle error after the release.
			if (err) console.error(err);
		
			// Don't use the connection here, it has been returned to the pool.
		  })
		
		}); 

module.exports = router;