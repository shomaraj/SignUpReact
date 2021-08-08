const mongoose= require("mongoose");
//creating schema
const userSchema= new mongoose.Schema({
     username : {
      type:String,
      required:true
    },
     password: {
      type:String,
      required:true
    },
     email:{
         type:String,
         required:true
     }, 
     date:{
       type: Date,
       default:Date.now
     }
});
//creating model  
module.exports=mongoose.model("UserData", userSchema);
