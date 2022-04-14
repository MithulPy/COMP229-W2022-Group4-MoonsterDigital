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
let PlayerModel = require('../models/player');

// displaying list method and ordering by name
module.exports.testRounds = (req, res, next) => {

    console.log("Hola, u entered test");

    //-------Dev Test-------
    console.log("Just a test");
    try {
        //_id, tournamentId, number,displayName

        let player1 = { id: 1, tournamentId: 1, number: 1, displayName: "Cristiano Ronaldo" };
        let player2 = { id: 2, tournamentId: 2, number: 2, displayName: "Lionel Messi" };
        let player3 = { id: 3, tournamentId: 3, number: 3, displayName: "Rafa Marquez" };
        let player4 = { id: 4, tournamentId: 4, number: 4, displayName: "Javier Hernandez" };
        let player5 = { id: 5, tournamentId: 5, number: 5, displayName: "Oribe Peralta" };
        let player6 = { id: 6, tournamentId: 6, number: 6, displayName: "Mauricio Ochoa" };
        let player7 = { id: 7, tournamentId: 7, number: 7, displayName: "Carlos Vela" };
        let player8 = { id: 8, tournamentId: 8, number: 8, displayName: "Hugo Sanchez" };



        let addRounds = RoundsModel({
            "QuarterFinal": {
                "team1": [player1, player2, player3],
                "team2": [player4, player5, player6],
                "team3": [player6, player7, player8],
                "team4": [player1, player2, player3],
                "team5": [player4, player5, player6],
                "team6": [player6, player7, player8],
                "team7": [player1, player2, player3],
                "team8": [player4, player5, player6],

            },
            "SemiFinal": {
                "team1": [player1, player2, player3],
                "team2": [player4, player5, player6],
                "team3": [player6, player7, player8],
                "team4": [player1, player2, player3],
            },
            "Final": {
                "team1": [player1, player2, player3],
                "team2": [player4, player5, player6],
            },

            "Winner": [player1, player2, player3]

        });

        console.log(addRounds);
        console.log("Quarter Final")
        console.log(addRounds.QuarterFinal);
        console.log("Semi Final")
        console.log(addRounds.SemiFinal);
        console.log("Final")
        console.log(addRounds.Final);
        console.log("Winner")
        console.log(addRounds.Winner);

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

module.exports.getPlayersFromTournament = async (req, res, next) => {
    console.log("Entered getPlayer ");

    /*  // find all documents named john and at least 18
      const players = await PlayerModel.find({ tournamentId: req.tournamentId}).exec();
  
      console.log(players);*/

    try {

        const players = await PlayerModel.find({ tournamentId: req.body.tournamentId }).exec();
        console.log("Tournament ID: ", req.body.tournamentId);

        //console.log(players);
        upsertRounds(players, req.body.tournamentId);
        res.json({ success: true, msg: 'Successfully Edited Players' });




    }
    catch (e) {
        console.log(e);
        res.send(e);
    }

}

async function upsertRounds(playersArray, tournamentId) {
    //-------Dev Test-------
    console.log("upsertRounds", playersArray);
    try {
        //_id, tournamentId, number,displayName



        const filter = { TournamentId: tournamentId };
        const update = {
            "QuarterFinal.team1": playersArray[0],
            "QuarterFinal.team2": playersArray[1],
            "QuarterFinal.team3": playersArray[2],
            "QuarterFinal.team4": playersArray[3],
            "QuarterFinal.team5": playersArray[4],
            "QuarterFinal.team6": playersArray[5],
            "QuarterFinal.team7": playersArray[6],
            "QuarterFinal.team8": playersArray[7],


        };





        // `doc` is the document _after_ `update` was applied because of
        // `returnOriginal: false`
        let doc = await RoundsModel.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });

        console.log("Quarters created/updated");
        console.log(doc);



    }

    catch (e) {
        console.log("There was an error: ");
        console.log(e);

    }
}

module.exports.getRounds = async (req, res, next) => {
    const rounds = await RoundsModel.find({ TournamentId: "622e3aaf32332187a6f2a33b" }).exec();
    console.log("These are the rounds: ", rounds[0].QuarterFinal);
    res.json(JSON.stringify(rounds.QuarterFinal));


}


module.exports.processUpsertSemiFinal = async (req, res, next) => {
    console.log("processUpsertSemiFinal");

    let team1, team2, team3, team4;
    try {

        const players = await RoundsModel.find({ TournamentId: req.body.tournamentId }).exec();

        console.log("Tournament ID: ", req.body.tournamentId);

        console.log("These are the players: ", players);

        // #region Selecting_Semis_Teams
        //Selecting team 1 of semi final
        if (req.body.team1 == 'one') {
            team1 = players[0].QuarterFinal.team1[0];
        } else {
            team1 = players[0].QuarterFinal.team2[0];
        }



        //Selecting team 2 of semi final
        if (req.body.team2 == 'one') {
            team2 = players[0].QuarterFinal.team3[0];
        } else {
            team2 = players[0].QuarterFinal.team4[0];
        }





        //Selecting team 3 of semi final
        if (req.body.team3 == 'one') {
            team3 = players[0].QuarterFinal.team5[0];
        } else {
            team3 = players[0].QuarterFinal.team6[0];
        }



        //Selecting team 4 of semi final
        if (req.body.team4 == 'one') {
            team4 = players[0].QuarterFinal.team7[0];
        } else {
            team4 = players[0].QuarterFinal.team8[0];
        }

        console.log("Semi-Team1: ", team1);
        console.log("Semi-Team2: ", team2);
        console.log("Semi-Team3: ", team3);
        console.log("Semi-Team4: ", team4);
        // #endregion

        // #region Upserting_Semis_Teams
        const filter = { TournamentId: req.body.tournamentId };
        const update = {
            "SemiFinal.team1": team1,
            "SemiFinal.team2": team2,
            "SemiFinal.team3": team3,
            "SemiFinal.team4": team4,
        };

        let doc = await RoundsModel.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });
        //#endregion







        res.json(JSON.stringify(players));



    }

    catch (e) {
        console.log("There was an error: ");
        console.log(e);

    }

}

module.exports.processUpsertFinal = async (req, res, next) => {
    console.log("processUpsertFinal");

    let team1, team2;
    try {

        const players = await RoundsModel.find({ TournamentId: req.body.tournamentId }).exec();

        console.log("Tournament ID: ", req.body.tournamentId);

        console.log("These are the players: ", players);

        // #region Selecting_Semis_Teams
        //Selecting team 1 of semi final
        if (req.body.team1 == 'one') {
            team1 = players[0].SemiFinal.team1[0];
        } else {
            team1 = players[0].SemiFinal.team2[0];
        }

         //Selecting team 1 of semi final
         if (req.body.team2 == 'one') {
            team2 = players[0].SemiFinal.team3[0];
        } else {
            team2 = players[0].SemiFinal.team4[0];
        }

        console.log("Final-Team1: ", team1);
        console.log("Final-Team2: ", team2);
       
        // #endregion

        // #region Upserting_Semis_Teams
        const filter = { TournamentId: req.body.tournamentId };
        const update = {
            "Final.team1": team1,
            "Final.team2": team2,
        
        };

        let doc = await RoundsModel.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });
        //#endregion







        res.json(JSON.stringify(players));



    }

    catch (e) {
        console.log("There was an error: ");
        console.log(e);

    }

}

module.exports.processUpsertWinner = async (req, res, next) => {
    console.log("processUpsertWinner");

    let team1;
    try {

        const players = await RoundsModel.find({ TournamentId: req.body.tournamentId }).exec();

        console.log("Tournament ID: ", req.body.tournamentId);

        console.log("These are the players: ", players);

        // #region Selecting_Semis_Teams
        //Selecting team 1 of semi final
        if (req.body.team1 == 'one') {
            team1 = players[0].Final.team1[0];
        } else {
            team1 = players[0].Final.team2[0];
        }


        console.log("Winner Team: ", team1);
     
       
        // #endregion

        // #region Upserting_Semis_Teams
        const filter = { TournamentId: req.body.tournamentId };
        const update = {
            "Winner": team1
        };

        let doc = await RoundsModel.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });
        //#endregion







        res.json(JSON.stringify(players));



    }

    catch (e) {
        console.log("There was an error: ");
        console.log(e);

    }

}

// displaying list method
module.exports.displayRounds = (req, res, next) => {

    console.log("Display rounds Route");
    let query = RoundsModel.find({TournamentId:req.params.tournamentId});
    query.exec((err, rounds) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.json(rounds);
        }
    });
}







