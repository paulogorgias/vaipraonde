module.exports = (sequelize, DataTypes) => {
  var bcrypt = require('bcrypt');
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
}
