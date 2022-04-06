const sliderChamps = document.querySelector("#slider-champs");
let sliderSectionChamps = document.querySelectorAll(".slider__section_champs");
let sliderSectionChampsLast = sliderSectionChamps[sliderSectionChamps.length -1];

const btnChampsLeft = document.querySelector("#btn-champs-left");
const btnChampsRight = document.querySelector("#btn-champs-right");

sliderChamps.insertAdjacentElement('afterbegin', sliderSectionChampsLast);

function Next() {
    let sliderSectionChampsFirst = document.querySelectorAll(".slider__section_champs")[0];
    sliderChamps.style.marginLeft = "-200%";
    sliderChamps.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderChamps.style.transition = "none";
        sliderChamps.insertAdjacentElement('beforeend', sliderSectionChampsFirst);
        sliderChamps.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSectionChamps = document.querySelectorAll(".slider__section_champs");
    let sliderSectionChampsLast = sliderSectionChamps[sliderSectionChamps.length -1];
    sliderChamps.style.marginLeft = "0%";
    sliderChamps.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderChamps.style.transition = "none";
        sliderChamps.insertAdjacentElement('afterbegin', sliderSectionChampsLast);
        sliderChamps.style.marginLeft = "-100%";
    }, 500);
}

btnChampsRight.addEventListener('click', function(){
    Next();
});

btnChampsLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 5000)