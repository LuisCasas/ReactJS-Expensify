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
*/

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