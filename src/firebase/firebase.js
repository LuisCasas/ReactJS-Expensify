import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'John Garcia',
    age: 22
});