const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysis');
router.get('/current-data', analysisController.getCurrentData);
router.get('/previous-data', analysisController.getPreviousData);
module.exports = router;