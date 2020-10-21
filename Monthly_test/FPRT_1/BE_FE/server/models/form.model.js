import mongoose, { Schema } from "mongoose";

// making schema
const formSchema = Schema;

// defining schema
const form = new formSchema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    fields: {
      type: String,
      required: true,
    },
    responses: [
      {
        type: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

// creating model
const formModel = mongoose.model("form", form);

export default formModel;
