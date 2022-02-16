require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routers = require('./app/route/index');
const createError = require('http-errors');
//import { request } from 'express';
//import v1Route from './app/route/v1/index'

const app = express();

const PORT = process.env.PORT || 8080;

//Set CORS coption
app.use(cors());

//Parse requests of content-type: application/json
app.use(express.json());

//Parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//RESTful API route for DB
app.use("/", routers);

// version 1 router
//app.use("/v1", v1Route)

//DB Connection
const db = require('./app/model/index.js');
    db.sequelize.sync();

//Default route for server status
app.get('/', (req, res) => {
    res.json({ message: `Server is running on port ${PORT}`});
});

//Set listen port for request
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
    let apiError = err
    
    if(!err.status) {
        apiError = createError(err)
    }

    // set locals, only providing error in development
    res.locals.message = apiError.message
    res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {}

    // render the error page
    return res.status(apiError.status)
        .json({message: apiError.message})
})