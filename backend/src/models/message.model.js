import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
},
  { timestamps: true } // Corrected typo from timeStamps to timestamps
);

const Message = mongoose.model("Message", messageSchema); // Corrected model name

export default Message;