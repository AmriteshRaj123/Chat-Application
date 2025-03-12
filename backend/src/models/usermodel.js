import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            require:true,
            unique:true,
        },
        fullName:{
            type:String,
            require:true, 
        },
        passward:{
            type:String,
            require:true,
            minlength:8,
        },
        profilePics:{
            type:String,
            default:"",
        },
    },
    { timestamps:true }
);
const User = mongoose.model("User", userSchema);

export default User;