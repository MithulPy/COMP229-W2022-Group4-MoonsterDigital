/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 29th 2022
 * @CourseName Web Application Development SEC005
 */


// Users

var express = require('express');
const User  = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

router.post('/register', (req,res)=>{
    let userData =req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        } else{
            res.status(200).send(registeredUser)
        }
    })
})


/* router.post('/login', (req,res)=>{
    let userData =req.body
    User.findOne({email:userData.email},(error,user)=>{
        if(error){
            console.log(error)
        } else{
            if(!user){
                req.status(401).send("Invalid Email")
            }else
            if(user.password !== user.password){
                res.status(401).send("Invalid Password")
            }else{
                res.status(200).send(user)
            }
            
        }
    })
    }) */


module.exports = router;
