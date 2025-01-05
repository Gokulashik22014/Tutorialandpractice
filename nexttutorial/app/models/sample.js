import mongoose from 'mongoose'

const sampleSchema=new mongoose.Schema({
    name:String,
})

const sampleModel=mongoose.model.sample || mongoose.model('sample',sampleSchema)

export default sampleModel