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
 

 
 /** Show Tournaments available  */
 router.get('/list', tournamentController.displayTournaments);
/* GET Route for the Edit tournament page - Update Operation */
router.get('/edit/:id', tournamentController.displayEditPage);

/* Post Route for the Edit tournament page - Update Operation */
router.post('/edit/:id', tournamentController.processEditPage);

router.get('/add', tournamentController.displayAddPage);

router.post('/add', tournamentController.processAddPage);



/* GET Route for the Delete tournament page - Delete Operation */
router.get('/delete/:id', tournamentController.performDelete);

 
 module.exports = router;