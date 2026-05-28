// MOBILE MENU TOGGLE
const navToggle = document.createElement("div");
navToggle.innerHTML = "☰";
navToggle.classList.add("menu-toggle");

document.querySelector("nav").appendChild(navToggle);

const navLinks = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


// NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

});


// HERO TEXT ANIMATION
const heroTitle = document.querySelector(".hero h1");

const text = heroTitle.innerText;

heroTitle.innerText = "";

let index = 0;

function typeEffect(){

  if(index < text.length){

    heroTitle.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);

  }

}

typeEffect();


// SERVICE CARD HOVER EFFECT
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px) scale(1.03)";
    card.style.transition = "0.3s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0) scale(1)";

  });

});


// CONTACT FORM ALERT
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  form.reset();

});


// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});


// SCROLL REVEAL EFFECT
const revealElements = document.querySelectorAll(".card, .about-container, .contact-form");

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}

revealOnScroll();