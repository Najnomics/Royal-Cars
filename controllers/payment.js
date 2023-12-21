require('dotenv').config();
const SignUp = require('../models/signUp');
const stripe = require('stripe')(process.env.SECRET_KEY);
let list_email = [];


const payment = async (req, res) => {
    const price = req.body.price;
    const name = req.body.name;
    const payed_email = req.body.email;
    console.log(req.body);

    const check_email = await SignUp.findOne({email: payed_email});
    console.log(check_email)
      if (!check_email) {
        res.redirect('/wrong_email');
    } else {

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
            },
            unit_amount: price*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:${process.env.PORT}/success`,
      cancel_url: `http://localhost:${process.env.PORT}/cancel`,
      customer_email: payed_email
      
    });
    let url = session.url
    if (url === session.url) {
      list_email.push(payed_email)
      list_email.push(name)
      res.redirect(session.url)
          

    } else {
        res.redirect('/cancel')
    }

  }
    
}

module.exports = {
  payment,
  list_email
}