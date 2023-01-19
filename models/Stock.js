const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const StockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "Please provide a Stock name"],
      trim: true,
      unique: [true, "Stock name already exists"],
      lowercase: true,
      minLength: [3, "Stock name must be at least 3 characters long"],
      maxLength: [100, "Stock name must be at most 100 characters long"],
    },
    description: String,
    unit: {
      type: String,
      required: true,
      enum: {
        value: ["kg", "litre", "pcs", "bag"],
        message: "{VALUE} is not a valid unit, must be kg, litre, pcs or bag",
      },
    },

    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            let isValid = true;
            // check if the data is array or not
            if (!Array.isArray(value)) return false;

            // check if each element is a valid URL or not
            value.forEach((url) => {
              if (!validator.isURL(url)) isValid = false;
            });
            return isValid;
          },
          message: "{VALUE} is not a valid URL",
        },
      },
    ],

    price: {
      type: Number,
      required: true,
      min: [0, "Price must be positive"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity must be positive"],
    },

    category: {
      type: String,
      required: true,
    },
    brand: {
      name: String,
      required: true,
      id: {
        type: ObjectId,
        ref: "Brand",
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message:
          "{VALUE} is not a valid status, must be in-stock, out-of-stock or discontinued",
      },
    },
    store: {
      name: {
        type: String,
        required: [true, "Please Provide a Store name"],
        trim: true,
        lowercase: true,
        enum: {
          values: [
            "dhaka",
            "chattogram",
            "khulna",
            "rajshahi",
            "barishal",
            "sylhet",
            "rangpur",
            "mymensingh",
          ],
          message: "{VALUE} is not a valid store name",
        },
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Store",
      },
    },
    suppliedBy: {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", StockSchema);
