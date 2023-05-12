const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));

//admin routes
const routes = require('./routes/routes');
app.use('/', routes);

const userController = require('./controllers/usercontroller');
const errorController = require('./controllers/error.js');
 //error
// app.use(errorController.get404);

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });