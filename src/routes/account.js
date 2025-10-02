const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');
router.post('/login', accountController.login);

module.exports = router;