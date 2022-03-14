/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


 var express = require('express');
 var router = express.Router();
  
 let tournamentController = require('../controllers/tournament');
 
 /** GET route to list */
 router.get('/', tournamentController.displayTournaments);
 
 module.exports = router;