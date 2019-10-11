const mongoose=require('mongoose');
var Schema =mongoose.Schema;
var studentSchema=new mongoose.Schema({
    fullname:{
        type:String
    },
    class:{
        type:String
    },
    address:{
        type:String
    },
    mobile:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
});
mongoose.model('student',studentSchema);