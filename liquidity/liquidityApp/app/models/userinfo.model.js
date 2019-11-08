"use strict";
const validator = require("validator");
const mongoose = require("mongoose");
let Schema = mongoose.Schema;


var userInfoSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    mobileNum: {
      type: Number,
      required: true
      /*  validate: {
        validator: function(v) {
          return v.length > 4;
        },
        message: "You must provide 10 digit."
      } */
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      validate: [validator.isEmail, "Invalid email"]
    },
    department: {
      type: String
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false
  }
);

module.exports = mongoose.model("UserInfo", userInfoSchema);
