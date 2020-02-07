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
    res.status(200).json(user))
    .catch(error => res.status(500).json({error: error}));
}
)

router.post('/login', async (req,res) =>{
  const { email, password } = req.body;

await  User.findOne({ where: {email: email}})
    .then(user=>{ console.log(user);
      if(!user){
        res.status(500).json({error: 'Usuário não encontradoi'})
      } else if(!user.validPassword(password)){
      res.status(500).json({error: 'Senha errada'})
      } else
      {
        res.status(200).json({user: user})
    }
    }).catch(error => console.log(error));
}
);
module.exports = router;
