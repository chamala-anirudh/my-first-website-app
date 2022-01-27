/*====== MENU SHOW Y HIDDEN ======*/
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");
const home = document.getElementById("home-page");
const contact = document.getElementById("contact-us");
const submit = document.getElementById("submit");

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

home.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

contact.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*====== MOUSEMOVE HOME IMG ======*/
document.addEventListener("mousemove", move);

function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

/*====== GSAP ANIMATION ======*/
// NAV
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10,
});

gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2,
});

// HOME

gsap.from(".nav__title", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".nav__description", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});

gsap.from(".nav__button", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
});

gsap.from(".nav__img", {
  opacity: 0,
  duration: 1,
  delay: 1.3,
  y: 30,
});

gsap.from(".join__us", {
  opacity: 0,
  duration: 1,
  delay: 1.3,
  y: 30,
});

const firebaseConfig = {
  apiKey: "AIzaSyDUL4t_GOxYEfu59VlTpA9nIWxc9rn1ovY",
  authDomain: "upforcoffee-web.firebaseapp.com",
  databaseURL: "https://upforcoffee-web-default-rtdb.firebaseio.com",
  projectId: "upforcoffee-web",
  storageBucket: "upforcoffee-web.appspot.com",
  messagingSenderId: "993963506360",
  appId: "1:993963506360:web:2908b48c6cbef26e0b524d",
  measurementId: "G-3Y3GBRFX30",
};

//initializing firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var joinUsFormDB = firebase.database().ref("joinUsForm");

document.getElementById("joinUsForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name"); //string
  var college_name = getElementVal("college_name");
  var email = getElementVal("email"); //string

  saveMessages(name, college_name, email);
  document.getElementById("joinUsForm").reset();
}

const saveMessages = (name, college_name, email) => {
  var newJoinUsForm = joinUsFormDB.push();

  newJoinUsForm.set({
    name: name,
    college_name: college_name,
    email: email,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
