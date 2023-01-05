const mongoose= require('mongoose')

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name required'],
        maxlength:[20,'Name cannot be greater than 20 characters'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema);