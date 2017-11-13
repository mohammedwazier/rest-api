const bcrypt=require("bcrypt");

'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  user.beforeCreate((user)=>{
     return bcrypt.hash(user.password,10).then((hash)=>{
         user.password=hash;
     }).catch((err)=>{
         console.log(err);
     });
  });
  return user;
};
