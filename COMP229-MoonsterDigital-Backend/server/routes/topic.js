/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 29th 2022
 * @CourseName Web Application Development SEC005
 */


var express = require('express');
var router = express.Router();
  
let forumController = require('../controllers/topic');

 
/** Show Forum Topics available  */
router.get('/list', forumController.displayTopics);

/* Post Route for the Edit tournament page - Update Operation */
router.post('/edit/:id', forumController.processEditPage);

/* Post Route for the ADD tournament page - Update Operation */
router.post('/add', forumController.processAddPage);
 
module.exports = router;