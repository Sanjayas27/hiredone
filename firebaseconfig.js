import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdJQyg21E1O4YogrlSusyZsvqlOdjQwWs",
  authDomain: "workease-39efc.firebaseapp.com",
  projectId: "workease-39efc",
  storageBucket: "workease-39efc.appspot.com",
  messagingSenderId: "227355095295",
  appId: "1:227355095295:web:30a2dc4ac7fdc1cd529cca",
  measurementId: "G-TRBXGKKWS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const analytics = getAnalytics(app);

  document.getElementById('signupForm').addEventListener('submit',submitFunc);

  function submitFunc(e){
    e.preventDefault();

    set(ref(db,'users/' + document.getElementById('userId').value),{
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        userId: document.getElementById('userId').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        state: document.getElementById('stateSelect').value,
        district: document.getElementById('districtSelect').value,
        profession: document.getElementById('profession').value,
        type: document.getElementById('typeSelect').value
    })

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        userId: document.getElementById('userId').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        state: document.getElementById('stateSelect').value,
        district: document.getElementById('districtSelect').value,
        profession: document.getElementById('profession').value,
        type: document.getElementById('typeSelect').value
    };
    console.log(formData);
    console.log("done!!")
  }