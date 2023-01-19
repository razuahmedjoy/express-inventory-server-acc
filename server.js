const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");


// database connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_LOCAL,{ useNewUrlParser: true }).then(()=>{
    console.log("Database connected")
})


// server run
const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})