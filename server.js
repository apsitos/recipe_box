const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Recipe Box'
app.use(express.static('public'));

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/index.html`, (err, file) => {
    response.send(file)
  });
});

app.get('/api/v1/recipes', (request, response) => {
  database('recipes').select()
    .then((recipes) => {
      response.status(200).json(recipes);
    })
    .catch((error) => {
      console.log('Something is wrong with the database', error);
    })
});

app.post('/api/v1/recipes', (request, response) => {
  console.log(request.body);
  const { title, author, url, notes } = request.body
  const recipe = { title, author, url, notes, created_at: new Date }
  database('recipes').insert(recipe)
  .then(() => {
    database('recipes').select()
    .then(recipes => {
      response.statsu(200).json(recipes)
    })
    .catch(error => {
      console.error('Something went wrong with saving the recipe');
    })
  })
})

app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})

module.exports = app
