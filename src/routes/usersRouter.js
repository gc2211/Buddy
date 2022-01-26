const express = require('express');
const router = express.Router();
const pool = require('../conf');


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

	// //Getting a connection from the pool
	// pool.getConnection((err, connection) => {
	// 	// Not connected!
	// 	if (err) console.error(err);
	// 	//Using the connection.
	// 	//Change the query const according to your needs
	// 	const { id } = req.params;
	// 	console.log(id);
	// 	connection.query('SELECT * FROM users WHERE id = ?', [id])
	// 	.then(([results]) => {
	// 		if (results.length) {
	// 		res.json(results[0]);
	// 		} else {
	// 		res.sendStatus(404);
	// 		}
	// 	});
	// 		//Realising the connection.
	// 		connection.release();

	// 		// Handle error after the release.
	// 		if (err) console.error(err);

	// 		// Don't use the connection here, it has been returned to the pool.
	// 	})
	//res.sendStatus(200);
});


module.exports = router;