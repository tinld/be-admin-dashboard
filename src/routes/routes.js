const router = require('express').Router();
const analysisRoutes = require('./analysis');
const accountRoutes = require('./account');


router.use('/account', accountRoutes);
router.use('/analysis', analysisRoutes);
module.exports = router;
