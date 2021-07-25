const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

//const bodyParser = require('body-parser');
// créer un midleware
// surveiller no;tre application  quand elle est sur '/' envoie nous 'postsRoutes'.
app.use(bodyParser.json());
app.use('/posts', postsRoutes);


app.listen(5500,() => console.log('Server strated: 5500'));