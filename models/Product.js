const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a Product name"],
        trim: true,
        unique: [true, "Product name already exists"],
        lowercase: true,
        minLength: [3, "Product name must be at least 3 characters long"],
        maxLength: [100, "Product name must be at most 100 characters long"],
    },
    description: String,
    unit: {
        type: String,
        required: true,
        enum: {
            value: ["kg", "litre", "pcs", "bag"],
            message: "{VALUE} is not a valid unit, must be kg, litre, pcs or bag"
        },
    },

    imageURLs: [{
        type: String,
        required: true,
        validate: {
            validator: (value) => {

                let isValid = true;
                // check if the data is array or not
                if (!Array.isArray(value)) return false;

                // check if each element is a valid URL or not
                value.forEach(url => {
                    if (!validator.isURL(url)) isValid = false;
                })
                return isValid;
            },
            message: "{VALUE} is not a valid URL"
        }
    }],
    category: {
        type: String,
        required: true,
    },
    brand:{
        name:String,
        required:true,
        id:{
            type:ObjectId,
            ref:"Brand"
        }
    }


}, { timestamps: true });

// creating some pre and post methods
ProductSchema.pre("save",(next)=>{
    if(this.quantity == 0){
        this.status = "out-of-stock"
    }
    next();
})

ProductSchema.post("save",(doc,next)=>{
    console.log("this is for test only to check product after saving")
    console.log(doc);
    next();
})


// module.exports = mongoose.model("Product", ProductSchema);
// or 
export const Product = mongoose.model("Product", ProductSchema);
