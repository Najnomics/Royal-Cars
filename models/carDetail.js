//cardeatails
const mongoose = require('mongoose');   // import mongoose  
const carDetailsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    }
},
{
timestamps:true
}
);

const CarDetail = mongoose.model('CarDetail', carDetailsSchema);
module.exports = CarDetail;
