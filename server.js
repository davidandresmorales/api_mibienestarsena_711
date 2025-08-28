// Including Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors'); // 👈 importa cors

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();   
}

// settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors({ 
  origin: '*', // 👈 durante pruebas permite todos los orígenes
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));
app.use('/api/v1/events', require('./api/v1/routes/events.routes')); 
app.use('/api/v1/rols', require('./api/v1/routes/rols.routes')); 
app.use('/api/v1/users', require('./api/v1/routes/users.routes'));

// Starting the Server
app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`);
});
