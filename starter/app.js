const express=require('express');
const app=express();
const port=8000;



app.listen(port,(req,res)=>{
    console.log("Listening on port"+port);
})