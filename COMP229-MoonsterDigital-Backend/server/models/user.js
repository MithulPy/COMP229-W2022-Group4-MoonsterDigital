/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 29th 2022
 * @CourseName Web Application Development SEC005
 */

  
 const mongoose = require('mongoose');
 
 const UserModel = mongoose.Schema({
    username:
     {
         type: String,
         default: '',
         trim: true,
         required: 'username is required'
     },
     /*
     password:
     {
         type: Date,
         default: Date.now
     },
     */
     email: 
     {
         type: String,
         default: '',
         trim: true,
         required: 'email is required'
     },
     displayName:
     {   type: String,
         default: '',
         trim: true,
         required: 'display name is required'
     },
     created: 
     {
          type: Date,
          default: Date.now
     },
     update: 
     {
          type: Date,
          default: Date.now
     }
 },
 {
     collection: "users"
 })
  
// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
 