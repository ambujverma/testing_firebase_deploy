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





var firebaseConfig = {
    apiKey: "AIzaSyAJ29MMeXXGiagELRKKPU3EvMKSFlqhXiI",
    authDomain: "portfolio-df8e6.firebaseapp.com",
    databaseURL: "https://portfolio-df8e6-default-rtdb.firebaseio.com",
    projectId: "portfolio-df8e6",
    storageBucket: "portfolio-df8e6.appspot.com",
    messagingSenderId: "904770129751",
    appId: "1:904770129751:web:13c72cde8f9a7f37783812"
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
