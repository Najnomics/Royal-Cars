require('dotenv').config();
const mongoose = require('mongoose');   // import mongoose

module.exports = mongoose.connect(process.env.DBURI, 
{useNewUrlParser: true, 
useUnifiedTopology: true}).then(() => {
    console.log('Connected to the database.');
}  // connect to the database
).catch((err) => {
    console.log('error connecting to database',err);   // if error, print it to console
});
