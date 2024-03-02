// Import required modules
let express = require('express');
// Import body parser
let bodyParser = require('body-parser');
// Import mongoose
let mongoose = require('mongoose');
// Create Express app
let app = express();

// Import routes
let apiRoutes = require("./routes");

// Configure bodyparser to handle POST requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Connect to MongoDB
const dbPath = 'mongodb://localhost/AReddyDB';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);

// Handle MongoDB connection success or failure
mongo.then(() => {
    console.log('Connected to MongoDB');
}, error => {
    console.log('Error connecting to MongoDB:', error);
});

// Get reference to MongoDB connection
var db = mongoose.connection;

// Check if MongoDB connection is successful
if (!db)
    console.log('Error connecting to database');
else
    console.log('Database connected successfully');

// Define the server port
var port = process.env.PORT || 8080;

// Welcome message for the root route
app.get('/', (req, res) => res.send('Welcome to Express'));

// Use API routes in the App
app.use('/api', apiRoutes);

// Launch app on the specified port
app.listen(port, function() {
    console.log('Running Ass 3.2 on Port ' + port);
});
