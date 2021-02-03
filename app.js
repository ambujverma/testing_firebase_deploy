window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}





// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3291Ys4E33hhkQgXcXdRKayZwuy5BRgY",
    authDomain: "portfoliocontactform-9f96f.firebaseapp.com",
    projectId: "portfoliocontactform-9f96f",
    storageBucket: "portfoliocontactform-9f96f.appspot.com",
    messagingSenderId: "642349320364",
    appId: "1:642349320364:web:99552b7d569e564470b709"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


// reference contactInfo collections
let contactInfo = firebase.database().ref("Infos");

// Listen for a submit
// document.querySelector(".formBx").addEventListener("submit", submitform);

function submitform(){

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name , email, message);

    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        Sendername: name,
        email: email,
        message:message,
    });
    document.querySelector(".contact-form").reset();
}
