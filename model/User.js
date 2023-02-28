// a User class using mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: String,
	email: String,
	thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],
	friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
