const CarDetail = require('../models/carDetail'); // import CarDetail model
const car1 = new CarDetail({
    name: 'Toyota Camry',
    price: 10000,
    image: 'img/car-rent-1.png',
    year: '2021',
    distance: '10000'
});
const car2 = new CarDetail({
    name: 'Corolla',
    price: 12000,
    image: 'img/car-rent-2.png',
    year: '2019',
    distance: '20000'
});
const car3 = new CarDetail({
    name: 'Avalon',
    price: 15000,
    image: 'img/car-rent-3.png',
    year: '2022',
    distance: '30000'
});
const car4 = new CarDetail({
    name: 'Highlander',
    price: 20000,
    image: 'img/car-rent-4.png',
    year: '2022',
    distance: '40000'
});
const car5 = new CarDetail({
    name: 'Toyota RAV4',
    price: 25000,
    image: 'img/car-rent-5.png',
    year: '2023',
    distance: '50000'
});
const car6 = new CarDetail({
    name: 'Toyota Venza',
    price: 30000,
    image: 'img/car-rent-6.png',
    year: '2023',
    distance: '60000'
});
const car7 = new CarDetail({
    name: 'Sienna',
    price: 35000,
    image: 'img/car-rent-7.jpg',
    year: '2023',
    distance: '70000'
});
const car8 = new CarDetail({
    name: 'Tacoma',
    price: 40000,
    image: 'img/car-rent-8.jpg',
    year: '2023',
    distance: '80000'
});
const car9 = new CarDetail({
    name: 'Toyota Tundra',
    price: 45000,
    image: 'img/car-rent-9.jpg',
    year: '2023',
    distance: '90000'
});

const cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

module.exports = cars;