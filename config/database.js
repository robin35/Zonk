//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoURI');  // Gets the URI from the default.json file in the config folder 


//=====================================================================================================================
// Call the mongoose.connect() method.  It sets up the connection to the mongoDB database.
// The mongoURI contains the uid, pw, and database name.  It is passed into the method as the first parameter.
// Added the following to resolve deprecation warnings displayed in the CLI during connection:
// - useNewUrlParser: true
// - useCreateIndex: true
//=====================================================================================================================

const connectDB = async () => {
    try {
        await mongoose.connect(database,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected..')
    } catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;