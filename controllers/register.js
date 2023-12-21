require('dotenv').config();
const bcrypt = require("bcrypt");
const SignUp = require('../models/signUp');
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

const signUp = async (req, res) => {
    console.log(req.body);
    const sign_up = new SignUp(req.body);
    
    const result = await SignUp.find({ email: req.body.email });
    console.log(result)
    try {
        if (req.body.password !== req.body.repeat_password) {
            res.send('<h1>Passwords do not match!</h1>');
            res.redirect('/signUp');
        }
        
        if (result.length === 0) {
            bcrypt.hash(sign_up.password, saltRounds)
            .then((hash) => {
                sign_up.password = hash;
                sign_up.save()
                .then((result) => {
                    console.log('User signed up successfully',result);
                    res.redirect('/car');
                })
                .catch((err) => {
                console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
           
    }
    else {
        res.send('<h1>A User with this email exists!</h1>');
    }
} catch (error) {
    console.log('an error occured in the registeration',error);

}
}

const login = async (req, res) => {
    try {
        const input = req.body;
        const foundUser = await SignUp.findOne({ email: input.email });
        if (foundUser) {
            bcrypt.compare(input.password, foundUser.password)
            .then((result) => {
                if (result === true) {
                    res.redirect('/car');
                } else {
                    res.send('<h1>Password is incorrect!</h1>');
                }
            }).catch((err) => {
                console.log(err);
            });
        } else {
            res.send('<h1>Email not found!, try login again or sign up</h1>');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    signUp,
    login
}