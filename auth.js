// Initialize Firebase app with your project configuration
firebase.initializeApp( firebaseConfig = {
    apiKey: "AIzaSyAdJQyg21E1O4YogrlSusyZsvqlOdjQwWs",
    authDomain: "workease-39efc.firebaseapp.com",
    projectId: "workease-39efc",
    storageBucket: "workease-39efc.appspot.com",
    messagingSenderId: "227355095295",
    appId: "1:227355095295:web:30a2dc4ac7fdc1cd529cca",
    measurementId: "G-TRBXGKKWS7"
  });
  
  const phoneNumberContainer = document.getElementById('phone-number-container');
  const verificationCodeContainer = document.getElementById('verification-code-container');
  const phoneNumberInput = document.getElementById('phone-number');
  const sendCodeButton = document.getElementById('send-code-button');
  const verificationCodeInput = document.getElementById('verification-code');
  const verifyCodeButton = document.getElementById('verify-code-button');
  const recaptchaContainer = document.getElementById('recaptcha-container'); // Assuming you have this element in your HTML
  
  // Function to send verification code to the phone number
  function sendVerificationCode() {
    const phoneNumber = phoneNumberInput.value;
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }
  
    // (Optional) reCAPTCHA verification before sending code
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer);
    recaptchaVerifier.render();
  
    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
      .then(confirmationResult => {
        // Verification code sent successfully
        console.log('Verification code sent!');
        phoneNumberContainer.style.display = 'none';
        verificationCodeContainer.style.display = 'block';
  
        // Function to verify the code entered by the user
        verifyCodeButton.addEventListener('click', () => {
          const verificationCode = verificationCodeInput.value;
          confirmationResult.confirm(verificationCode)
            .then(result => {
              // User signed in successfully
              console.log('User signed in successfully!');
              // Handle successful sign-in here (e.g., redirect to another page)
            })
            .catch(error => {
              console.error('Verification code failed:', error);
              alert('Invalid verification code');
            });
        });
      })
      .catch(error => {
        console.error('Error sending verification code:', error);
        alert('An error occurred while sending the verification code');
      });
  }
  
  sendCodeButton.addEventListener('click', sendVerificationCode);
  