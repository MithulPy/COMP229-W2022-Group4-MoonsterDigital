/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


 var express = require('express');
 var router = express.Router();
 
 let roundsController = require('../controllers/rounds');
 
 /** GET route to home */
 router.get('/', roundsController.testRounds);
 

 module.exports = router;
 