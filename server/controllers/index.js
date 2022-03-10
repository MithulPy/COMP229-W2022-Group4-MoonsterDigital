/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Tournament Page');
  });
  
module.exports = router;