import { Schema, model } from "mongoose";

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
  userInfo: { type: Schema.Types.ObjectId, ref: "UserInfo" },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

export default model("User", User);
