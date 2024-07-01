require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const categoryRoutes = require('./routes/categoryRoutes');  // 追加

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/questions', questionRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/categories', categoryRoutes);  // カテゴリルートを追加

module.exports = app;
