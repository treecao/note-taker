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
  
// readFromFile('db/db.json', 'utf8').then((data) => {
  //const notes = JSON.parse(data)
  // var notes = new Array();
  // notes.push({
  //   ...req.body, 
  //   id:uuid()
  // })
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
// );
// })

// notes.post('/notes', (req,res) => {
//   console.log(`${req.method} request received for notes`);
  
// readFromFile('db/db.json', 'utf8').then((data) => {
//   //const notes = JSON.parse(data)
//   var notes = new Array();
//   notes.push({
//     ...req.body, 
//     id:uuid()
//   })
//   writeToFile('db/db.json', JSON.stringify(notes))
//   res.json(notes[notes.length-1])
// }
// );
// })

//delete notes
notes.delete('/notes/:id', (req,res)=>{
  // console.info(req.params.id);
  let noteId = req.params.id;
  for (let i = 0; i < db.length; i++) {
    // console.info(db[i])
    if (noteId === db[i].id){
      console.info(db[i])
    db.splice(i, 1)
    }
  }
  writeToFile("db/db.json", db);
  readFromFile("db/db.json").then((data)=>res.json(JSON.parse(data))) 
  // res.json(notes);
})

module.exports = notes;