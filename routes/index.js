const express = require('express');
const router = express.Router();

const booksRoutes = require('./book')

router.use('/books', booksRoutes);

module.exports = router;