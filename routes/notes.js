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
  const {title, text, id} = req.body;
  if (req.body){
    const note = {
      title,
      text,
      id: uuid()
    }
    readAndAppend(note, 'db/db.json')
    res.json(notes[notes.length-1])
  }
})

//delete notes
notes.delete('/notes/:id', (req,res)=>{
  let noteId = req.params.id;
  for (let i = 0; i < db.length; i++) {
    if (noteId === db[i].id){
      console.info(db[i])
    db.splice(i, 1)
    }
  }
  writeToFile("db/db.json", db);
  readFromFile("db/db.json").then((data)=>res.json(JSON.parse(data))) 
})

module.exports = notes;