import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyAI1pBctppwcgID0bW5YetX0M9mvsLb6dI",
 authDomain: "firstpass-ef596.firebaseapp.com",
 databaseURL: "https://firstpass-ef596.firebaseio.com",
 projectId: "firstpass-ef596",
 storageBucket: "firstpass-ef596.appspot.com",
 messagingSenderId: "185298584247",
 appId: "1:185298584247:web:668cae7c03af4e70650332",
 measurementId: "G-8K036C46LP"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;