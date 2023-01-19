const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares

app.use(express.json());
app.use(cors());


// routes
const brandRoutes = require("./routes/brand.route");
const { storeRoutes } = require("./routes/store.route");
const { categoryRoutes } = require("./routes/category.route");

app.get("/",(req,res)=>{
    res.send("Server working Fine")
})

app.use("/api/v1/brand",brandRoutes)
app.use("/api/v1/store",storeRoutes)
app.use("/api/v1/category",categoryRoutes)


module.exports = app;



