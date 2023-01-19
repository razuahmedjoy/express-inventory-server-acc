const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;

const CategorySchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter category name"],
        trim:true,
        lowercase:true,
        unique:true,
    },
    description:String,
    imageUrl:{
        type:String,
        validate:[validator.isURL,"Please provide valid URL with HTTP or HTTPS"]
    }

},{timestamps:true});

module.exports = mongoose.model("Category",CategorySchema);
