//require things
const notes = require('express').Router();
const uuid = require(''); //add helpers here uuid & fs utils
const db = require('../db/db.json');

//get routes using helper functions
//route to get notes
notes.get('/', (req,res) => {
    console.info(`${req.method} request received for notes`);
  readFromFile('((((helpers here --fs utils)))').then((data) => res.json(JSON.parse(data)));
})

//route to post notes


//route to dete notes