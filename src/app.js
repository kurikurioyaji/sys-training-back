require('dotenv').config();  // ここでは特に何も表示しない
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/questions', questionRoutes);
app.use('/api/results', resultRoutes);

module.exports = app;
