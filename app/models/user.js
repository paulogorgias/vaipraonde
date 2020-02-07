module.exports = (sequelize, DataTypes) => {
  var bcrypt = require('bcrypt');
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },{
    hooks:{
      beforeSave: (user) =>{
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password,salt);
      }
    },

  });

  User.prototype.validPassword = function(password)  {
    return bcrypt.compareSync(password, this.password);
  }

  return User;
}
