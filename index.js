/* Start The server*/
const express= require("express")
const app= express()

app.listen(5000,()=>{
    console.log("App Started on the port number",5000)
})

// Stitching the route here 
require("./routes/idea.routes")(app)