const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;

const StoreSchema = mongoose.Schema({
    name:{
        
        type:String,
        required:[true,"Please Provide a Store name"],
        trim:true,
        lowercase:true,
        enum:{
            values:["dhaka","chattogram","khulna","rajshahi","barishal","sylhet","rangpur","mymensingh"],
            message:"{VALUE} is not a valid store name"
        }
        
    },
    description:String,
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    },
    manager:{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:"User"
        }
    }

},{timestamps:true});

module.exports = mongoose.model("Store",StoreSchema);
