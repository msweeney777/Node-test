const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// Get /users
app.get('/users', (req, res) => {
  res.send([{
    name: 'J. Obediah "Obie" Danciewicz-Helmers',
    age: 23
  }, {
    name: 'Matt Sweeney',
    age: 24
  }, {
    name: 'Glen Bossie',
    age: 23
  }]);
});
// Give users a name property

app.listen(3000);
module.exports.app = app;
