/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


var express = require('express');
var router = express.Router();
 
let indexController = require('../controllers/index');

/** GET route to home */
router.get('/', indexController.displayHomePage);

module.exports = router;