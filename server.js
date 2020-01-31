const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error')
//Routre files
const bootcamps = require('./routes/bootcamps')
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'})

//Connect to DB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000

//Body Parser

app.use(express.json())

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

app.use(errorHandler);

const server = app.listen(
    PORT,
    console.log(`Server listening in ${process.env.NODE_ENV} mode on the port ${PORT}`.brightMagenta.bold)
);

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`.red.bold)

    server.close(()=>process.exit(1))
})