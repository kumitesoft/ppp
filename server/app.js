const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json({ limit: '50MB' }));


// Connect routes
const Items = require('./routes/itemRoute');
app.use('/', Items);

module.exports = app;
