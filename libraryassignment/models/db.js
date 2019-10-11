const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/librarydb',{useNewUrlParser:true},(err)=>{


    if(!err){
        console.log(" mongodb connection success.....");
    }
    else{
        console.log(" not connect");
    }
});
require('./student.models');
