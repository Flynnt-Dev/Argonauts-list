const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * SERVER CONGIG -----------------------------
 */

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () =>{ console.log('Server is running on port 5000');});

/**
 * ROUTER SET
 */

const argonautsRouter = require('./routes/argonauts');

app.use('/argonauts', argonautsRouter);

/**
 * DATABASE CONNECTION -----------------------
 * MONGO DB
 */

const uri = process.env.MDB_URI;

mongoose.connect(uri,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open',(err)=>{
    if(err) return console.error(err);
    console.log('Connection etablished Successfully to MongoDB');
});