// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBq0JfAR0rUY4e1U8sbIelbAxaU9xUUpcQ",
    authDomain: "contact-38805.firebaseapp.com",
    databaseURL: "https://contact-38805.firebaseio.com",
    projectId: "contact-38805",
    storageBucket: "contact-38805.appspot.com",
    messagingSenderId: "581587018973",
    appId: "1:581587018973:web:cd5369f0a6f5a3f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show Alert
    document.querySelector('.alert').style.display = 'block';

    // Hide Alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('contactForm').reset(); 
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}