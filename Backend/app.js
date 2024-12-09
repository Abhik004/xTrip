const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes=require('./routes/maps.routes')

connectToDb();

app.use(cors());
app.use(cookieParser()); // Use cookie-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/user', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps',mapsRoutes)

module.exports = app;
