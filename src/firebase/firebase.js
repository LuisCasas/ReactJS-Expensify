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

// database.ref('employed').remove().then(() => {
//     console.log('employed removed from db');
// }).catch((err) => {
//     console.log('Error while deleting employed', err);
// });

// another method to delete:
// database.ref('employed').set(null);

