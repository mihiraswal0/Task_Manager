const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const port=8000;
const tasks=require('./routes/task.js');
const notfound=require('./middleware/notfound.js');
const error=require('./middleware/error.js');
require('./db/connect.js');
app.use(express.static("./public"));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/tasks',tasks);
app.use(notfound);
app.use(error);
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
