//navigate to the HTML files 

//requiring packages
const express = require('express');
const notesRoutes = require('./notes');

const app = express();

app.use("/notes", notesRoutes);

module.exports = app;
