/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Apr 8th 2022
 * @CourseName Web Application Development SEC005
 */


 var express = require('express');
 var router = express.Router();
   
 let playerController = require('../controllers/player');
 let jwt = require('jsonwebtoken');

 let passport = require('passport');
  
 /** Show all registered players  */
 router.get('/list', playerController.displayPlayers);

 /* Post Route for the getting only the display names in an array for a particular tournament id - Aggregate Operation */
 router.get('/display-names/:id', /*passport.authenticate('jwt', {session: false}),*/ playerController.getDisplayNames);

 /* Post Route for the register player page - Upsert Operation */
 router.post('/upsert', passport.authenticate('jwt', {session: false}), playerController.processUpsertPage);

 /* Post Route for the register player page - Bulk Upsert Operation */
 router.post('/bulk-upsert', /*passport.authenticate('jwt', {session: false}),*/ playerController.processBulkUpsertPage);

 module.exports = router;