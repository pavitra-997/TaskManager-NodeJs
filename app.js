require('./db/connect')
const express= require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound= require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')


const port=3000
//if we do not use express.json,we do not get data in req.body 
app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start= async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server listening to port ${port}....`))

    } catch (error) {
        
    }
}

start()



 
