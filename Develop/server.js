
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage -- update URl
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page -- update URL
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);


//use * whenever anyone navigates to any url not ending in /notes, it should render the index.html page
app.get("*")

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

