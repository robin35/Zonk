const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password Required",
        validate: [
            function(input) {
                return input.length >= 8;
            },
            "Password needs to be 8 characters or longer."
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;