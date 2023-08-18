const express = require('express');
const router =express.Router();
const {getAllTasks,getTask,createTask,deleteTask,editTask}=require('../controllers/task.js');
router.get('/',getAllTasks);
 
module.exports=router;