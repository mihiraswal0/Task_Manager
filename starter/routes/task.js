const express = require('express');
const router =express.Router();
const {getAllTasks,
    getTask,
    createTask,
    deleteTask,
    editTask}=require('../controllers/task.js');
router.get('/',getAllTasks);
router.post('/',createTask);
router.get('/:id',getTask);
router.patch('/:id',editTask);
router.delete('/:id',deleteTask);
module.exports=router;