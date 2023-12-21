const { createTransport, getTestMessageUrl } = require("nodemailer");
const SignUp = require('../models/signUp');
const CarDetail = require('../models/carDetail');
const CarDetails = require('../models/carDetail');
const cars = require('./carControllers');
let selectedCar = {};
const payments = require('./payment');
const list_email = payments.list_email;

const home = async (req, res) => {
    try {
        const car = await CarDetail.find({});
        if (car.length === 0) {
            await CarDetail.insertMany(cars);
            res.redirect('/');
        } else {
            console.log(car);
            res.render('index', {car: car});
        }
        
    } catch (error) {
        console.log(error);
    }
}

const about = async (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.log(error);
    }
}

const services = async (req, res) => {
    try {
        res.render('service');
    } catch (error) {
        console.log(error);
    }
}

const contact = async (req, res) => {
    try {
        res.render('contact');
    } catch (error) {
        console.log(error);
    }
}

const signUp = async (req, res) => {
    try {
        res.render('signUp');
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error);
    }
}

const carRoute = async (req, res) => {
    try {
        const car = await CarDetail.find({});
        res.render('car', {car: car});
    } catch (error) {
        console.log(error);
    }
}

const payment = async (req, res) => {
    try {
        res.render('payment', {selectedCar: selectedCar});
    } catch (error) {
        console.log(error);
    }
}

const order = async (req, res) => {
    try {
        res.render('order', {selectedCar: selectedCar});
    } catch (error) {
        console.log(error);
    }
}

const team = async (req, res) => {
    try {
        res.render('team');
    } catch (error) {
        console.log(error);
    }
}

const testimonial = async (req, res) => {
    try {
        res.render('testimonial');
    } catch (error) {
        console.log(error);
    }
}

const selectCar = async (req, res) => {
    selectedCar = req.body;
    console.log(selectedCar);
    try {
        res.redirect('/payment');
    } catch (error) {
        console.log(error);
    }   
}

const success = async (req, res) => {
    console.log(list_email)
    const name = list_email[1];
    const payed_email = list_email[0]
    const init_transporter = async () => {
        const transporter = createTransport({
          host: "smtp.gmail.com",
          port: process.env.HOST,
          secure: true,
          auth: {
            user:  process.env.EMAIL,
            pass:  process.env.PASS,
          },
        });
        return transporter;
      };
      const send_payed_email = async ({ email }) => {
        const transporter = await init_transporter();
        const info = await transporter.sendMail({
          from: process.env.EMAIL,
          to: email,
          subject: "Payment Received",
          html: `<b>Your puchase of ${name} was successful</b>`,
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", getTestMessageUrl(info));
      };

    try {
        await  send_payed_email({email:payed_email});
        await SignUp.findOneAndUpdate({ email: payed_email }, { payments: 'paid' }, { new: true })
        res.render('success');
    } catch (error) {
        console.log(error);
    }
}

const cancel = async (req, res) => {
    try {
        res.render('cancel');
    } catch (error) {
        console.log(error);
    }
}

const unregisteredEmail = async (req, res) => {
    try {
        res.render('wrong_email');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    home, 
    about, 
    services, 
    contact,
    carRoute,
    signUp,
    login,
    payment,
    order,
    team,
    testimonial,
    selectCar,
    success,
    cancel,
    unregisteredEmail
}