const express = require ("express");
const app= express();
// const bodyParser=require("body-parser");
const router = express.Router();
const bcrypt = require("bcrypt");                        //encrypt password
// app.use(bodyParser.urlencoded({extended: true}));


const userSchemaCopy= require("../models/signUpModels");  //importing schema 

router.post("/signup", async function(req,res){              //use async and await
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword  = await bcrypt.hash(req.body.password, saltPassword);
    //res.send("sending");
    //creates document 
    const signedUpUser=new userSchemaCopy({
        username :req.body.username,
        password:securePassword,
        email :req.body.email
    });

    signedUpUser.save()
    .then(data=> {
        res.json(data)
    })
    .catch(err=>{
      res.json(err)
    })
    ;
});


module.exports=router;

