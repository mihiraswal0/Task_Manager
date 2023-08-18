const getAllTasks=(req,res)=>{
    res.send("All Tasks");
}
const getTask=(req,res)=>{
    res.json({id:req.params.id});
}
const createTask=(req,res)=>{
    res.send(req.body);
}
const editTask=(req,res)=>{
    res.send("Edit Task");
}
const deleteTask=(req,res)=>{
    res.send("Delete Task");
} 
module.exports={getAllTasks,getTask,editTask,deleteTask,createTask};