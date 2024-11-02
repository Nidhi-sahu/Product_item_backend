const express = require('express');
const router = express.Router();

router.use('/product', require('./v1/productRoute'))

module.exports = router;