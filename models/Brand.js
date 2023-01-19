const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const BrandSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter brand name"],
        trim: true,
        unique: true,
        lowercase: true,
        maxlength: 100,
    },
    description: String,
    email: {
        type: String,
        lowercase:true,
        validate: [validator.isEmail, "Please provide a valid email address"],
    },
    website: {
        type: String,
        validate: [validator.isURL, "Please enter valid URL with HTTP or HTTPS"],
    },
    location: String,
    products: [
        {
            type: ObjectId,
            ref: "Product",
        },
    ],

    suppliers: [
        {
            name: String,
            contactNumber:String,
            id:{
                type: ObjectId,
                ref:"Supplier"
            }
        },
    ],
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    }

},{timestamps:true});

// module.exports = mongoose.model("Brand", BrandSchema);
// or 
export const Brand = mongoose.model("Brand",BrandSchema);