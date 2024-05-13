import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: String,
    googleId: String
});

const User = model("User", userSchema);

module.exports = User;