import mongoose, { Schema } from "mongoose"

const userInfoSchema=new Schema({
    firstName:{
        required:true,
        type:String,
        match:/^[a-zA-Z]+$/,
    },
    lastName:{
        required:false,
        type:String,
        default:"",
    },
    userName:{
        type:String,
    },
    location:{
        type:String,
        required:true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    role:{
        type:String,
        enum:["customer","fisherman"]
    }
})
userInfoSchema.pre("save",function(next){
    if(!this.userName){
        this.userName=`${this.firstName} ${this.lastName}`
    }  
    next()
})
const userInfo=mongoose.model("userInfo",userInfoSchema)
export default userInfo