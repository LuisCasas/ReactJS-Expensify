import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'John Garcia',
    age: 22,
    employed: true,
    location: {
        country: 'Scotland',
        city: 'Glasgow'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((err) => {
    console.log('Error: ', err);
});

// database.ref('age').set(29);
// database.ref('location/city').set('Edinburgh');

database.ref('Attributes').set({
    height: '185cm',
    weight: '75kg'
}).then(() => {
    console.log('Attribute is saved');
}).catch((err) => {
    console.log('Attribute Error: ', err);
});