import mongoose,{Schema} from "mongoose";

const imageSchema=new Schema({
    image:{
        data:Buffer,
        contentType: String
    },
    speciesId:{
        type:Schema.Types.ObjectId,
        ref:"species"
    }
})

const images=mongoose.model("images",imageSchema)
export default images;