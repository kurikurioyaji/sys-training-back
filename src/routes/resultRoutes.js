const express = require('express');
const { submitResults } = require('../controllers/resultController');

const router = express.Router();

router.post('/submit', submitResults);

module.exports = router;
