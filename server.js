
const express = require('express');
const path = require('path');
const api = require('./routes/notes.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// app.get('/api/notes', (req,res) => {
//   console.log(`${req.method} request received for notes`);
// // readFromFile('../db/db.json').then((data) => res.json({}));
// res.json({});
// })

// GET Route for notes page 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage 
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

