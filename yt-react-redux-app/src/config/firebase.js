import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdN0BxLf4iYNwYzwvqOgHch2QNNHyrvjs",
  authDomain: "yt-react-redux-app.firebaseapp.com",
  databaseURL: "https://yt-react-redux-app.firebaseio.com",
  projectId: "yt-react-redux-app",
  storageBucket: "yt-react-redux-app.appspot.com",
  messagingSenderId: "881279966574",
  appId: "1:881279966574:web:8a35962da4c411e69c357f",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
