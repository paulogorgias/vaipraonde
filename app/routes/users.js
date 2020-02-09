var express = require('express');
var router = express.Router();
var { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret = process.env.JWT_TOKEN;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async(req,res) => {
  const user = await User.create(req.body)
    .then(user=>
    res.status(200).json(user))
    .catch(error => res.status(500).send(error));
}
)

router.post('/login', async (req,res) =>{
  const { email, password } = req.body;

 User.findOne({ where: {email: email}})
    .then( async user=>{ ;
      if(!user){
        res.status(500).json({error: 'Usuário não encontrado'})
      } else if(!await user.validPassword(password)){
      res.status(500).json({error: 'Senha errada'})
      } else
      {
        const token = jwt.sign({email}, secret, { expiresIn: '1d' });
        res.status(200).json({user: user, token: token})
    }
    }).catch(error => res.send(error));
}
);
module.exports = router;
