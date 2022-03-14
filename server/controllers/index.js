/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home', displayName: /*req.user ? req.user.displayName :*/ ''});
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if user is already logged in
  if (!req.user)
  {
      res.render('auth/login', 
      {
          title: 'Login',
          messages: /*req.flash('loginMessage')*/ '',
          displayName: /*req.user ? req.user.displayName :*/ ''
      });
  }
  else
  {
      res.redirect('/');
  }
};

module.exports.displayRegisterPage = (req, res, next) => {
  // check if user already logged in
  if (!req.user)
  {
      
      res.render('auth/register',
      {
          title: 'Register',
          messages: /*req.flash('registerMessages')*/ '',
          displayName: /*req.user ? req.user.displayName :*/ ''
      });
  }
  else
  {
      return res.redirect('/');
  }
};