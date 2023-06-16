// Placeholder file from MERN mini project. Make neccessary adjustments then delete this comment.

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
