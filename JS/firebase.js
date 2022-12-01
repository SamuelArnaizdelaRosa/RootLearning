
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCsgJm6lJKOJG36MVwnVHljUj29U0A4G_A",
    authDomain: "fir-app-82376.firebaseapp.com",
    projectId: "fir-app-82376",
    storageBucket: "fir-app-82376.appspot.com",
    messagingSenderId: "86981186489",
    appId: "1:86981186489:web:1299ef04021407e1859c68",
    measurementId: "G-N0C9GZC572"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
