var express = require('express');
const { mailer } = require('../helpers/mailer');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  mailer().then(console.log).catch(e => console.log(e))
  res.status(200).json({ message:'respond with a resource' });
});

module.exports = router;
