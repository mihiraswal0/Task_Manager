const mongoose = require('mongoose');

const TaskSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  compeleted:{
    type:Boolean,
    default:false,
  }  
})

module.exports =mongoose.model('Task',TaskSchema);