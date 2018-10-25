//import { createStore } from 'redux';

/*
const person = {
    name: 'John',
    age: 22,
    location: {
        city: 'London',
        country: 'UK'
    }
};


// const name = person.name;
// const age = person.age;

const {name: firstName = 'Unknown', age, location} = person; // ES6 syntax
console.log(`${firstName} is ${age}`);

const {city, country: countryName} = location;

console.log(`${city} is in ${countryName}`);

const album = {
    title: 'Master of Puppets',
    band: 'Metallica',
    publisher: {
        name: 'RoadRunner'
    }
};

// console.log(album.publisher.name);

const {title, band, publisher} = album;
const {name: publisherName = 'self published'} = publisher;

console.log(`${title} from ${band} was published by ${publisherName}`);

*/


const address = ['32 London Road', 'Edinburgh', 'Scotland', 'EH5'];
const [street, city, country, postcode = 'EH'] = address;

// console.log(`Address is ${address[0]}, city: ${address[1]}`);
console.log(`Address is ${street}, city: ${country}`);


const item = ['Coffee Late', '2.00', '2.50', '3.00'];
const [drink, small, medium, larage] = item;

console.log(`The price of a ${drink} medium size is ${medium}`);

