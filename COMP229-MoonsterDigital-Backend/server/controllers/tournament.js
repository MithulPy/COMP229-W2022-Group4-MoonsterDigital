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
const tournament = require('../models/tournament');
let router = express.Router();
let alert = require('alert');

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
        res.render('tournament/list', { title: 'Tournament List', Tournament: tournamentList, displayName: /*req.user ? req.user.displayName :*/ "" });
    }
});
}

var counter = 0;

//  GET the tournament Details page in order to add new tournament
module.exports.displayAddPage = (req, res, next) => {
    counter++;
    let addTournament = tournament();
    let msg = req.flash('MYMESSAGE').toString();
    console.log('COUNTER: ', counter, "lENGHT: ",msg.length, "MSG: ", msg);
    console.log('COUNTER2: ', counter, "lENGHT: ",msg.length,"MSG: ", msg);
   

    
    
    res.render('tournament/add', {
        title: 'Add a new tournament',
        tournament: addTournament,
        alert: msg
    })      

}
// POST process the tournament Details page and create new tournament - CREATE
module.exports.processAddPage = (req, res, next) => {

    try{
        let addTournament = tournament({
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

        tournament.create(addTournament, (err, tournament) =>{
            if(err)
            {
                console.log(err);
                req.flash('MYMESSAGE', 'INPUT ERROR: Invalid parameters ');
                res.redirect('/tournament/add');
            }
            else
            {

                res.redirect('/tournament/list');
            }
        });    
    }

     catch (e){
         console.log(e);
         res.send(e);
     }
    
   
}
//displaying edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;         // retrieving id

    Tournament.findById(id, (err, tournamentToEdit) => {      //finding by id using mongoose and rendering view
        if (err) {

            console.log(err);
            res.end(err);
        } else {
           
            console.log('TournamentDate:', tournamentToEdit.startDate);
            res.render('tournament/edit', { title: 'Edit Tournament', Tournament: tournamentToEdit, displayName: /*req.user ? req.user.displayName :*/ "" });
        }

    });

}

// POST process the edit page - updateOne
module.exports.processEditPage = (req, res, next) => {
    
    let id = req.params.id

    let updatedTornament = Tournament({
        _id: req.body.id,
        owner: req.body.owner,
        title: req.body.title,
        description: req.body.description,
        isActive: req.body.isActive,
        isCompleted: req.body.isCompleted,
        players: req.body.players,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        rounds: req.body.rounds
    });

    Tournament.updateOne({_id: id}, updatedTornament, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {

            res.redirect('/tournament/list');
        }
    });
    
}




// GET - process the delete by user id
module.exports.performDelete = (req, res, next) => {
    
    let id = req.params.id;

    Tournament.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the movie list
            res.redirect('/tournament/list');
        }
    });

}