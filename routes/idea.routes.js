
const idea_controllers=require("../controllers/idea.controllers")

/**
 *  Route for
 *  GET 127.0.0.1:5000/ideaApp/api/v1/ideas
 */

module.exports=(app)=>{
    app.get("/ideaApp/api/v1/ideas",idea_controllers.getAllIdeas)

    // Route for ideaApp/api/v1/ideas/:id
    app.get("/ideaApp/api/v1/ideas/:id",idea_controllers.getIdeasBasedonId)
}