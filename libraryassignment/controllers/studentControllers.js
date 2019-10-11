const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const student=mongoose.model('student');


router.get('/',(req,res)=>
 {
   res.render("student/register",{
    viewtitle:"Welcome To Library"
    });
});
router.post('/',(req,res)=>
{
  registerData(req,res);
   });

   function registerData(req,res){
    var stud=new student();
   stud.fullname=req.body.fullname;
   stud.class=req.body.class;
   stud.address=req.body.address;
   stud.mobile=req.body.mobile;
   stud.username=req.body.username;
   stud.password=req.body.password;
   stud.save((err,doc)=>{
       if(!err)
       res.redirect(__dirname+'/student/list');
       else{
           console.log("error during data inserted");
     }
   });

   }
   
   router.get('/list',(req,res)=>{
     
    stud.find((err,docs)=>{
      if(!err){
        res.render("student/list",{
          list:docs
        });
      }
      else{
        console.log("error to retriev");
      }
    });
   });
   
module.exports=router;