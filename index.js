const express = require('express');
const hbs = require('hbs');
require('dotenv').config()

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',  (err) => {
  console.log(err)
});

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Juan Palacios',
    title: 'Course node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Juan Palacios',
    title: 'Course node'
  })
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name:' Juan Palacios',
    title: 'Course node'
  })
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
  console.log(`App listening at httpd://localhost:${port}`);
});
