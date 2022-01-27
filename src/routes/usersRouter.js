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

 router.post('/', (req, res) => {

 console.log(req.body)
//Getting a connection from the pool
pool.getConnection((err, connection) => {
	// Not connected!

	if (err) console.error(err);
	//Using the connection.
	//Change the query const according to your needs
  	const query = 'INSERT INTO users (firstname,lastname,age,country ,city ,province,image_url) VALUES (?,?,?,?,?,?,?)'
	connection.query(query,[req.body.firstname, req.body.lastname,req.body.age,req.body.country,req.body.city,req.body.city,req.body.province,req.body.image_url],(err, data) => {
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

//Update a user
 
router.patch('/:id', (req, res) => {
 
	//Getting a connection from the pool
	pool.getConnection((err, connection) => {
		// Not connected!
		if (err) console.error(err);
		//Using the connection.
		//Change the query const according to your needs
	 
		const query = 'UPDATE users SET ? WHERE id =? '
		connection.query(query,[req.body,req.params.id],(err, data) => {
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
  
	//Delete a user
 
	router.delete('/:id', (req, res) => {
 
		//Getting a connection from the pool
		pool.getConnection((err, connection) => {
			// Not connected!
			if (err) console.error(err);
			//Using the connection.
			//Change the query const according to your needs
		 
		    const query = 'DELETE FROM users WHERE id = ?'
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

module.exports = router;