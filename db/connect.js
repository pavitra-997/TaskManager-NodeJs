const mongoose=require('mongoose') 


// const connectionString='mongodb+srv://pavithra_rajesh:1234@cluster0.r3vxr.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


const connectDB=(url)=>{
   return mongoose.connect(url,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    })
}



module.exports=connectDB