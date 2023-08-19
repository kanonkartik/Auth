import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
     username:{
     type:String,
     required:[true,"please provide a username"],
     unique:true
     }, 
     email:{
        type:String,
        required:[true,"please provide a email"],
        unique:true
        },
     password:{
            type:String,
            required:[true,"please provide a password"],
            unique:true
            },
    isVerified:{
        type: Boolean,
        default:false,
    },
    ifAdmin:{
        type:Boolean,
        default:false
    },

    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    virifyToken:String,
    virifyTokenExpiry:Date,
        
})
const User = mongoose.models.User || mongoose.model("User", userSchema);


export default User;