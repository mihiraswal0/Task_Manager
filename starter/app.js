const express=require('express');
const app=express();
const port=8000;
const tasks=require('./routes/task.js');
app.use('/api/v1/tasks',tasks);

app.get('/homepage',(req,res)=>{
    res.send("Task Manger App");
})
app.listen(port,(req,res)=>{
    console.log("Listening on port"+port);
})
//get all task api/task/getAll
//create task api/task/createTask
//get single task id api/task/: id
//update a task-patch api/task/:id
//delete a task  api/task/:id
