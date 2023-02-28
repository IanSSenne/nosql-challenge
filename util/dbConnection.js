const { connect, connection } = require("mongoose");

connect("mongodb://localhost/nosql-challenge", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = connection;
