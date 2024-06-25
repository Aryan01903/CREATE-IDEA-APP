/* Start The server*/
const express= require("express")
const app= express()

app.listen(8000,()=>{
    console.log("App Started on the port number",8000)
})