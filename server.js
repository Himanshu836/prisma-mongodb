import "dotenv/config"
import express, { urlencoded } from "express"
const app = express()
const PORT = process.env.PORT || 1000


app.use(express.json())
app.use(urlencoded({extended:false}))


import router from "./routes/index.js"
app.use(router)




app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})