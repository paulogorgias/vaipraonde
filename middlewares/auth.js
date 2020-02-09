require('dotenv').config();

const secret = process.env.JWT_TOKEN;

const jwt = require('jsonwebtoken');
const {User} = require('../app/models/');

const withAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];


  if(!token){
    res.status(401).json({error: 'Unautorized: No token provided'});
  }else{
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
          res.status(401).send('Unauthorized: Invalid token');
      } else {

        req.email = decoded.email;
       
        User.findOne({where: {email: decoded.email}})
          .then( user=> {
            req.user = user;
            next();
          }).catch( err=> {
          res.status(401).send(err);
          });
      
      }});
  }
}

module.exports = withAuth;
