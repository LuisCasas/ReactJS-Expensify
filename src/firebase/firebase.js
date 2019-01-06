import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Andrew',
    job: {
        title: 'Software Developer',
        company: 'Amazon'
    }
});

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

setTimeout(() => {
    database.ref('job/company').set('Google');
}, 12000);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 4000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 12000);

/*
database.ref('location')
    .once('value')
    .then((snapshot) => {
        const value = snapshot.val();
        console.log(value);
}).catch((err) => {
    console.log(err);
});
*/

// database.ref().set({
//     name: 'John Garcia',
//     age: 22,
//     job: {
//         title: 'Engineer',
//         company: 'AirBnB'
//     },
//     location: {
//         country: 'Scotland',
//         city: 'Glasgow'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('Error: ', err);
// });

// database.ref().update({
//     age: 25,
//     'job/company': 'Amazon',
//     'location/city': 'Edinburgh'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((err) => {
//     console.log('Error: ', err);
// });

// database.ref().update({
//     name: 'Mike',
//     age: 33,
//     role: 'Engineer',
//     employed: null
// });

// database.ref('employed').remove().then(() => {
//     console.log('employed removed from db');
// }).catch((err) => {
//     console.log('Error while deleting employed', err);
// });

// another method to delete:
// database.ref('employed').set(null);

