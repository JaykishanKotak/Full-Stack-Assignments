import mongoose from "mongoose";

// creating Schema for Tasks
const ListItemSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  img: {
    data: Buffer,
    type: String,
    required: false,
  },
});

const ListItem = mongoose.model("ListItem", ListItemSchema);

export default ListItem;
