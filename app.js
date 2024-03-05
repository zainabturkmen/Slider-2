// 
import people from "./data.js";

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");


// set slides
container.innerHTML = people.map((person, slideIndex) => {

    const{img, name, job, text} = person;
    return `
        <article class="slide">
            <img src="https://www.course-api.com/images/people/person-1.jpeg" class="img" alt="jane doe">
            <h4>jane doe</h4>
            <p class="title">product designer</p>
            <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident similique quia facere obcaecati tempora 
            labore exercitationem, nulla ipsam dolorum quo?
            </p>
            <div class="quote-icon">
            <div class="fas fa-quote-right">
            </div>
            </div>
    </article>`
})