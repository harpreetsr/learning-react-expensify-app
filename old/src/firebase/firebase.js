import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZfhM6L6wFmJQZ40-MDdSWA0zOU8mKPTo",
  authDomain: "expensify-31c6d.firebaseapp.com",
  databaseURL: "https://expensify-31c6d.firebaseio.com",
  projectId: "expensify-31c6d",
  storageBucket: "expensify-31c6d.appspot.com",
  messagingSenderId: "945941180033",
  appId: "1:945941180033:web:ca418f284a0c63b0c2a780",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: "Harpreet Singh",
  age: 32,
  location: {
    city: "Mohali",
    state: "Punjab",
    country: "India",
  },
  isSingle: false,
});

database.ref("attributes").set({
  height: 172,
  weight: 75,
});
console.log("Database created/updated");
