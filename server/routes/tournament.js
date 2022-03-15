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
 router.get('/', tournamentController.displayTournaments);

  /** Displa */
  router.get('/edit', tournamentController.displayEditPage);
   /** Displa */
   router.get('/add', tournamentController.displayAddPage);
    /** Displa */
    router.post('/add', tournamentController.processAddPage);

  router.post('/delete', tournamentController.performDelete);

 
 module.exports = router;