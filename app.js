const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares

app.use(express.json());
app.use(cors());


// routes
const brandRoutes = require("./routes/brand.route")


app.get("/",(req,res)=>{
    res.send("Server working Fine")
})

app.use("/api/v1/brand",brandRoutes)


module.exports = app;



