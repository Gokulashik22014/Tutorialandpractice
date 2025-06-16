import mongoose,{Schema} from "mongoose";

const speciesSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    locations:{
        type:[String],
        required:false,
    },
    cost:{
        type:Number,
        required:true,
    }
})
const species=mongoose.model('species',speciesSchema)
export default species;