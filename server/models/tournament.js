/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date Mar 10th 2022
 * @CourseName Web Application Development SEC005
 */


  
 const mongoose = require('mongoose');
 
 const TournamentModel = mongoose.Schema({
   owner: {
     userID: { type: mongoose.Schema.Types.ObjectId},
     name: { type: String, require: true },
   },
   title: {
     type: String,
     require: true,
     unique: true,
   },
   description: {
     type: String,
     require: true,
   },
   isActive: {
     type: Boolean,
     require: true,
   },
   isCompleted: {
     type: Boolean,
     default: false,
   },
   players: [
     {
       name: { type: String, require: true },
       placement: { type: Number, require: true },
     },
   ],
   startDate: {
     type: Date,
     default: Date.now(),
   },
   endDate: {
     type: Date,
   },
   rounds: [
     {
       roundNumber: {
         type: Number,
         require: true,
       },
       isCompleted: {
         type: Boolean,
         default: false,
       },
       bouts: [
         {
           isCompleted: { type: Boolean, default: false },
           boutPlayers: [
             {
               name: { type: String, require: true },
               won: { type: Boolean, default: false },
             },
           ],
         },
       ],
     },
   ],
 });
 
 module.exports = mongoose.model('tournament', TournamentModel);
