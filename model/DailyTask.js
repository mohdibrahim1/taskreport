const { DataTypes } = require('sequelize');
const db = require('../helper/db');

const DailyTask = db.define('DailyTask',{
    Username: { type: DataTypes.STRING, field: 'Username' },
    Task: { type: DataTypes.STRING, field: 'Task' },
    rct: { type: DataTypes.DATE, field: 'rct' },

})
module.exports=DailyTask;