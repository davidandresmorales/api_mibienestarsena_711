// Including Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();   
}

// settings
app.set('port', process.env.PORT || 6000);

// ✅ Middleware CORS (esto es lo que evita el error en Flutter Web)
app.use(cors({}));

// Extra: manejar preflight OPTIONS
app.options('*', cors());

// Otros middlewares
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
