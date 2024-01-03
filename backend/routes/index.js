const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/flashcards', require('./flashcards'));

module.exports = router;