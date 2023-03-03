//require things
const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const fsUtils = require('../helpers/fsUtils');
const db = require('../db/db.json');

//get routes using helper functions
//route to get notes
notes.get('/', (req,res) => {
    console.info(`${req.method} request received for notes`);
  readFromFile('../helpers/fsUtils.js').then((data) => res.json(JSON.parse(data)));
})

//route to post notes
notes.post('/', (req,res) => {
    console.info(`${req.method} request received to submit notes`);
    const{} = req.body;
})

//route to delete notes
notes.delete('/', (req,res) => {
    
})

module.exports = notes;