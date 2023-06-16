// Placeholder file from MERN mini project. Make neccessary adjustments then delete this comment. (Routes go in this folder.)

const router = require('express').Router();
const matchupRoutes = require('./matchup-routes');
const techRoutes = require('./tech-routes.js');

router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);

module.exports = router;
