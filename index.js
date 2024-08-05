/* Start The server*/
const express= require("express")

const app= express()

app.use(express.json())

// Stitching the route here 
require("./routes/idea.routes")(app)

app.listen(5000,()=>{
    console.log("App Started on the port number",5000)
})

