const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
	Movie.find().then((allMoviesFromDB) => {
		// console.log({ movies: allMoviesFromDB });
		res.render("movies", { movies: allMoviesFromDB });
	});
});

router.get("/movies/:id", (req, res) => {
	const { id } = req.params;
	console.log(id);
	Movie.findById(id).then((movieById) => {
		console.log(movieById);
		res.render("movie", movieById);
	});
});

module.exports = router;
