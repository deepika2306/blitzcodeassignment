require('./models/db');
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
 const bodyparser=require('body-parser');
var studentsControllers=require('./controllers/studentControllers');
var app=express();
app.use(bodyparser.urlencoded({
extended:true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({ extname:'hbs', defaultLayout:'mainLayout.hbs',layoutsDir:__dirname +'/views/layouts/'}));
app.set('view engine','hbs');

app.listen(2223,()=>{
    console.log("express server started at:2223");
});
app.use('/library',studentsControllers);
app.get("/login",(req,res)=>
   {
   res.sendFile(__dirname+'/login.html');
      });
      app.get("/dashstudnet",(req,res)=>
      {
      res.sendFile(__dirname+'/studentInfo.html');
         });
         app.get("/admin",(req,res)=>
         {
         res.sendFile(__dirname+'/admin.html');
            });