import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    surname: String,
    emails: [String],
    provider: String
})

mongoose.model("users",userSchema)