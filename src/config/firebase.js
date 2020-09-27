import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5cg-CxPytfwcaNAgnDByhHZm8l4jhWLA",
    authDomain: "spotify-ccb3f.firebaseapp.com",
    databaseURL: "https://spotify-ccb3f.firebaseio.com",
    projectId: "spotify-ccb3f",
    storageBucket: "spotify-ccb3f.appspot.com",
    messagingSenderId: "29848195548",
    appId: "1:29848195548:web:45ccdbb4c09143e88f7f19",
    measurementId: "G-14XB82EBJT"
  };

const fire = firebase.initializeApp(config);

export default fire;