// Placeholder file from MERN mini project. You will probably delete this file.

const router = require('express').Router();
const { getAllTech } = require('../../controllers/tech-controller');

router.route('/').get(getAllTech);

module.exports = router;
