const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose); //password,salting & hashing automatically added by passportLocalMongoose plugin 

module.exports =new mongoose.model("User",userSchema);