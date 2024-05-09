// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Reference to your Firebase database
const database = firebase.database();

// Function to collect data from the form and send it to Firebase
function sendDataToFirebase(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Push data to Firebase
    database.ref('users').push({
        name: name,
        email: email
    });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    // Optional: Provide feedback to the user
    alert('Data submitted successfully!');
}

// Attach event listener to the form submit event
document.getElementById('dataForm').addEventListener('submit', sendDataToFirebase);
