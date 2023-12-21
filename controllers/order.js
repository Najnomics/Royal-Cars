const order = async (req, res) => {
 
  const {selectPickup, selectLocaton, date, time, selectPerson} = req.body;
  console.log(req.body);
try {
  res.write('<h1>Order Placed Successfully</h1>');
  res.write(`<h3>${selectPerson} will deliver your car in ${selectPickup} on ${date} at exactly ${time}</h3>`)
}
catch (error) {
    console.log(error);
    res.send('<h1>Something went wrong</h1>');
}
}

  module.exports = order;