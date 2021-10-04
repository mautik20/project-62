import  firebase from "firebase";

//initialize your database
  var firebaseConfig = {
    apiKey: "AIzaSyCRa4M6j-F0du8jQtNOSNcc29LzA1DHERA",
    authDomain: "student-attendance-app-bce15.firebaseapp.com",
    projectId: "student-attendance-app-bce15",
    storageBucket: "student-attendance-app-bce15.appspot.com",
    messagingSenderId: "1028928521727",
    appId: "1:1028928521727:web:f9455a88f64bd9254113ca"
  };

  let app =   firebase.initializeApp(firebaseConfig);
  
  export default firebase.database()
 

  