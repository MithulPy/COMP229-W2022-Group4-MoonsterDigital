/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */

//importing modules
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

//importing model
let Tournament = require('../models/tournament');

// displaying list method and ordering by name
module.exports.displayTournaments = (req, res, next) => {

    let query =  Tournament.find().sort({"name":1} );   //filtering and ordering with mongoose method
   query.exec((err, tournamentList) => {               //calling exect method to be able to execute an arrow method using the sorted list
    if (err) {
        return console.error(err);
    }
    else {
        console.log(tournamentList);
        res.render('tournament/list', { title: 'Tournament List', Tournament: tournamentList, displayName: /*req.user ? req.user.displayName :*/ "" });
    }
});
}


//displaying edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;         // retrieving id

    Tournament.findById(id, (err, tournamentToEdit) => {      //finding by id using mongoose and rendering view
        if (err) {

            console.log(err);
            res.end(err);
        } else {
            console.log(tournamentToEdit);
            res.render('tournament/details', { title: 'Edit Tournament', Tournament: tournamentList, displayName: /*req.user ? req.user.displayName :*/ "" });
        }

    });

}

//processing edit post method callback
module.exports.processEditPage = (req, res, next) => {

    try{let id = req.params.id;        //try was for debugging 

        let updatedTornament = Tournament({      //creating obj using Contact model
            "_id" :id,
            "owner" : req.body.owner,
            "title": req.body.title,
            "description" : req.body.description,
            "isActive" : req.body.isActive,
            "isCompleted": req.body.isCompleted,
            "players" : req.body.players,
            "startDate" : req.body.startDate,
            "endDate": req.body.endDate,
            "rounds" : req.body.rounds,    
        });
        
        Contact.updateOne({_id:id},updatedTornament, (err)=>{ //updating the document that matches the id with the previous obj
        
            if(err){
                console.log(err);
                res.end(err);
             }else{
                 //res.redirect('/');
                 res.render('tournament/list', { title: 'Tournament List', Tournament: tournamentList, displayName: /*req.user ? req.user.displayName :*/ "" });
             }        
        })

    } catch (e){
        console.log(e); 
        res.end(err)
    }
}

//deleting callback
module.exports.performDelete =  (req, res, next) => {
    let id = req.params.id;
    Contact.remove({_id:id}, (err) =>{      //removing document that matched the _id
        if(err){
            console.log(err);
            res.end(err);
         }else{
            res.render('tournament/list', { title: 'Tournament List', Tournament: tournamentList, displayName: /*req.user ? req.user.displayName :*/ "" });
         }
    })
}