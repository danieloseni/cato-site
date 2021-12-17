"use strict";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes/api');
const port = process.env.PORT || 6000;
app.use(express.json());
app.use('/api', apiRoutes);
mongoose.connect('mongodb://localhost/cato').then((result) => {
    app.listen(port, () => {
        console.log(`Listening on ${port}`);
    });
}).catch((error) => {
    console.log(error);
});
