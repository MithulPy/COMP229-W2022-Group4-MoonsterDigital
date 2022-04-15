/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


 var express = require('express');
 var router = express.Router();

 let jwt = require('jsonwebtoken');

 let passport = require('passport');
 
 let roundsController = require('../controllers/rounds');
 
 /** GET route to home */
 router.get('/:tournamentId', roundsController.displayRounds);
 router.post('/set-semiFinal',passport.authenticate('jwt', {session: false}), roundsController.processUpsertSemiFinal);
 router.post('/set-final',passport.authenticate('jwt', {session: false}), roundsController.processUpsertFinal);
 router.post('/set-winner',passport.authenticate('jwt', {session: false}), roundsController.processUpsertWinner);

 //Just dev routes
 router.get('/getRounds', roundsController.getRounds);

 

 module.exports = router;
 