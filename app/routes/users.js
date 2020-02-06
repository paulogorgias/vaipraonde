var express = require('express');
var router = express.Router();
var { User } = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async(req,res) => {
  const user = await User.create(req.body)
    .then(user=>
    res.statys(200).json(user))
    .catch(error => res.status(500).json({error: error}));
}
)
module.exports = router;
