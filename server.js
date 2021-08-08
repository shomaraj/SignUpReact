const { request } = require("express");
const express = require("express");
const app = express();
const mongoose= require("mongoose");
const routeUrls = require("./routes/routes");  //import routes.js 
const cors = require("cors");                 // cross-origin resource sharing
const dotenv= require("dotenv");
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS,function(){
    console.log("database connected");
});

app.use(express.json());                     //bodyparser
app.use(cors());
app.use("/app",routeUrls);                   //routeUrls connected to the basepath

app.listen(4000, function(){
    console.log("server running on port 4000 ");
});