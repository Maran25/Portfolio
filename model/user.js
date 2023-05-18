import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: "string", required: [true, "Name is required!"] },
    email: { type: "string", required: [true, "Email is required!"] },
    message: { type: "string" }
})

const User = models.User || model("User", userSchema);

export default User;