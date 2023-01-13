const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');

// Servir contenido estatico

app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Christian Chapoñan',
    titulo: 'Curso de Nodejs'
  });
});

app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Christian Chapoñan',
    titulo: 'Curso de Nodejs'
  });
});
app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Christian Chapoñan',
    titulo: 'Curso de Nodejs'
  });
});

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });