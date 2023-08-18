const Task=require('../models/Task.js');
const getAllTasks=async(req,res)=>{
    try{
        const alltask= await Task.find();
        res.status(200).json({message:"succes",alltask:alltask});
    }
    catch(err){
        res.status(500).json({message:"fail",err:err.message});
    }
}
const getTask=async(req,res)=>{
  const id=req.params.id;
  try{
    const getTask=await Task.findOne({_id:id});
    if(!getTask)
    {
      return res.status(404).json({message:"fail",err:"no task found"});
    }
  return  res.status(200).json({message:"success",getTask:getTask});
  }
  catch(err){
    return res.status(500).json({message:"fail",err:err.message});
  }
}

const createTask=async(req,res)=>{
  try{
    const task=new Task(req.body);
    task.save();
    res.status(200).json({message:"success",task:task});
  }
  catch(err){
    res.status(500).json({message:"fail",err:err.message});
  }
}
const editTask=async(req,res)=>{
    try{
      const id=req.params.id;
      const task=await Task.findOneAndUpdate({_id:id},req.body,{new:true});
      if(!task)
      return res.status(500).json({message:"fail",err:"no task with given id"});
      return res.status(200).json({message:"success",task:task})
    }
    catch(err){
      return res.status(500).json({message:"fail",err:err.message});
    }
}
const deleteTask=async(req,res)=>{
  const id=req.params.id;
  try{
    const getTask=await Task.findOneAndDelete({_id:id});
    if(!getTask)
    {
      return res.status(404).json({message:"fail",err:"no task found"});
    }
  return  res.status(200).json({message:"success",getTask:getTask});
  }
  catch(err){
    return res.status(500).json({message:"fail",err:err.message});
  }
} 
module.exports={getAllTasks,getTask,editTask,deleteTask,createTask};