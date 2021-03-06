//=======================================================================================================================
// Dependencies
//=======================================================================================================================
const express = require('express');
const connectDB = require('./config/database');
const path = require('path');


//=======================================================================================================================
// Call Express, assign Port, and connect to MongoDB
//=======================================================================================================================
const app = express();
const PORT = process.env.PORT || 8080;

connectDB();


//=======================================================================================================================
// Init Body Parser Middleware.  It gets the data from req.body.
//=======================================================================================================================

app.use(express.json({ extended: false}));


//=======================================================================================================================
// The app.use() function is used to call the routes from the various routes/api files 
//=======================================================================================================================
// app.get('/', (req,res) => res.send('API Running'));


app.use('/api/newgame', require('./routes/api/newgame'));
app.use('/api/home', require('./routes/api/home'));
app.use('/api/stats', require('./routes/api/stats'));
app.use('/api/signin', require('./routes/api/signin'));
app.use('/api/signup', require('./routes/api/signup'));
app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/searchquestions', require('./routes/api/searchquestions'));


// Server static assets in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('front-end/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
    });

}

//=======================================================================================================================
// Start Server
//=======================================================================================================================

app.listen(PORT, () => console.log('Server listening on PORT: ' + PORT));


