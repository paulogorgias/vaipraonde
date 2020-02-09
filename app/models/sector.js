'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define('Sector', {
    sectorName: DataTypes.STRING
  }, {});
  Sector.associate = function(models) {
    // associations can be defined here
  };
  return Sector;
};