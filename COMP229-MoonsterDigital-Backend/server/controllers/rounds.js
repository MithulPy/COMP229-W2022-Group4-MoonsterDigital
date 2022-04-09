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
let RoundsModel = require('../models/rounds');

// displaying list method and ordering by name
module.exports.testRounds = (req, res, next) => {

    console.log("Hola, u entered test");
   

    //-------Dev Test-------
    console.log("Just a test");
    try {
        //_id, tournamentId, number,displayName

        let player1 = { id:1, tournamentId:1, number:1, displayName:"Cristiano Ronaldo" };
        let player2 = { id:2, tournamentId:2, number:2, displayName:"Lionel Messi" };
        let player3 = { id:3, tournamentId:3, number:3, displayName:"Rafa Marquez" };
        let player4 = { id:4, tournamentId:4, number:4, displayName:"Javier Hernandez" };
        let player5 = { id:5, tournamentId:5, number:5, displayName:"Oribe Peralta" };
        let player6 = { id:6, tournamentId:6, number:6, displayName:"Mauricio Ochoa" };
        let player7 = { id:7, tournamentId:7, number:7, displayName:"Carlos Vela" };
        let player8 = { id:8, tournamentId:8, number:8, displayName:"Hugo Sanchez" };
    


        let addRounds = RoundsModel({
            "QuerterFinal": {
                "team1": [player1, player2,player3],
                "team2": [player4, player5,player6],
                "team3": [player6, player7,player8],
                "team4": [player1, player2,player3],
                "team5": [player4, player5,player6],
                "team6": [player6, player7,player8],
                "team7": [player1, player2,player3],
                "team8": [player4, player5,player6],

            },
            "SemiFinal": {
                "team1": [player1, player2,player3],
                "team2": [player4, player5,player6],
                "team3": [player6, player7,player8],
                "team4": [player1, player2,player3],
            },
            "Final": {
                "team1": [player1, player2,player3],
                "team2": [player4, player5,player6],
            }
        });

        console.log(addRounds);
        console.log("Querter Final")
        console.log(addRounds.QuerterFinal);
        console.log("Semi Final")
        console.log(addRounds.SemiFinal);
        console.log(" Final")
        console.log(addRounds.Final);

        RoundsModel.create(addRounds, (err, RoundsModel) => {
            if (err) {
                console.log(err);

            }
            else {
                console.log('Successfully Added New Comment');
                res.json(JSON.stringify(addRounds));
            }
        });
    }

    catch (e) {
        console.log("There was an error: ");
        console.log(e);
    }
    //--------------
}







