//sign up page
const mongoose = require('mongoose');
const signUpSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    phone:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique:true,
        match:/^\S+@\S+\.\S+$/
    },

    profession:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    },

    repeat_password:{
        type:String,
        require:true
    },

    payments:{
        type:String,
        default:'not paid'
    },

},
{
    timestamps:true
}
);

const SignUp = mongoose.model('SignUp', signUpSchema);
module.exports = SignUp;
