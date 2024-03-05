// 
import people from "./data.js";

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");


// set slides
container.innerHTML = people.map((person, slideIndex) => {

    const{img, name, job, text} = person;
    // more logic later
    let position = "next";
    if (slideIndex === 0) {
        position = "active";
    }
    if (slideIndex === people.length -1) {
        position = "last";
    }
    return `
        <article class="slide ${position}">
            <img src="${img}" class="img" alt="jane doe">
            <h4>${name}</h4>
            <p class="title">${job}</p>
            <p class="text">
            ${text}
            </p>
            <div class="quote-icon">
            <div class="fas fa-quote-right">
            </div>
            </div>
    </article>`
}).join("");

const startSliding = (type) =>{
    const active = document.querySelector (".active");
};

nextBtn.addEventListener("click", ()=>{
    startSliding()
});

prevBtn.addEventListener("click", ()=>{
    startSliding("prev")
});