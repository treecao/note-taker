//require things
const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const  { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const db = require('../db/db.json');

//get routes using helper functions
//route to get notes
notes.get('/notes', (req,res) => {
    console.log(`${req.method} request received for notes`);
  readFromFile('db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
})

notes.post('/notes', (req,res) => {
  console.log(`${req.method} request received for notes`);
  
readFromFile('db/db.json', 'utf8').then((data) => {
  //const notes = JSON.parse(data)
  var notes = new Array();
  notes.push({
    ...req.body, 
    id:uuid()
  })
  writeToFile('db/db.json', JSON.stringify(notes))
  res.json(notes[notes.length-1])
}
);
})

module.exports = notes;