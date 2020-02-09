module.exports = (sequelize, DataTypes) => {
  var bcrypt = require('bcrypt');
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },{
    hooks:{
      beforeSave: async (user) =>{
         const salt = await bcrypt.genSalt(10)
         user.password = await bcrypt.hash(user.password,salt) 
      }
    },

  });

  User.prototype.validPassword = async function(password)  {
    return await bcrypt.compare(password, this.password);
  }

  return User;
}
