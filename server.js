//=======================================================================================================================
// Require Dependencies
//=======================================================================================================================
const express = require('express');
const connectDB = require('./config/db');




//=======================================================================================================================
// Set up Express and MongoDB
//=======================================================================================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Connect Database
connectDB();


// Init Body Parser Middleware
app.use(express.json({ extended: false}));

//=======================================================================================================================
// Set up Routes
//=======================================================================================================================
app.get('/', (req,res) => res.send('API Running'));

app.use('/api/addquestion', require('./routes/api/addquestion'));
app.use('/api/gameboard', require('./routes/api/gameboard'));
app.use('/api/home', require('./routes/api/home'));
app.use('/api/stats', require('./routes/api/stats'));
app.use('/api/userauth', require('./routes/api/userauth'));
app.use('/api/userregister', require('./routes/api/userregister'));


//=======================================================================================================================
// Start Server
//=======================================================================================================================

// app.listen(PORT, () => {
//     console.log("Server listening on PORT:" + PORT);
// });

app.listen(PORT, () => console.log('Server started on port ${PORT}'));

//consider adding this to the package.json file.  there is already a "start" for react in the file so it replaces the below?
//"start": "node server",
//"start": "react-scripts start",
