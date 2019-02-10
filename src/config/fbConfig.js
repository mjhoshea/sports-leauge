import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwBueEK2hk9shQ2lzzItEkNg328VmEmVY",
    authDomain: "sports-league-a5e2a.firebaseapp.com",
    databaseURL: "https://sports-league-a5e2a.firebaseio.com",
    projectId: "sports-league-a5e2a",
    storageBucket: "sports-league-a5e2a.appspot.com",
    messagingSenderId: "171073110824"
};
firebase.initializeApp(config);
export default firebase;