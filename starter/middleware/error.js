const error=(err,req,res,next)=>{
    return res.status(500).send({status:"fail",message:err.message});
}
module.exports =error;