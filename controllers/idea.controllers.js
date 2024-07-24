/*
*
*   Write the logic to create the controllers for the idea resources 
*
*
*/
const ideas = require("../models/idea.model")
/* 
*   create the controller for fetching all the ideas
*
*   GET 127.0.0.1:5000/ideaApp/api/v1/ideas
*
*   Return list of all the ideas
*/
exports.getAllIdeas= (req,res)=>{
    
    // First read all the ideas from the idea model file

    // Return all those ideas
    res.status(200).send(ideas)
}

/**
 * Controller that fetches idea based on their id
 * 
 * GET 127.0.0.1/5000/ideaApp/api/v1/ideas/2
 */

exports.getIdeasBasedonId=(req,res,next)=>{
       //We need to first read the idea id from req path param 
    idea_id=req.params.id
    
      //Using id check whether it is present
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }
    else{
        res.status(404).send({
            message : "idea not found for the given id" 
        })
    }
     
      //if present then return id 
 

}