const Sequelize  = require('sequelize');
const sequenlize=require('../config/db');
const sellers=sequenlize.define('sellers',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,

 },
 itemName:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 description:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 price:{
   type:Sequelize.STRING,
   allowNull:false,
},
quantity:{
   type:Sequelize.STRING,
   allowNull:false,
}
}
, {
   timestamps: false, // Disable createdAt and updatedAt columns
 });
    module.exports=sellers;
    