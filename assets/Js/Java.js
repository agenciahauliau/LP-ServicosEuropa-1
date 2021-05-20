"use restrict";

window.onload = function(){
  scrollSection();
 }

window.onscroll = function () {
  scrollSection();
};

function scrollSection() {
  const sections = document.querySelectorAll("section, header, footer");
  const astronaut = document.querySelector(".three .astronaut");
  const quotes = document.querySelectorAll(".four .testimonial");

  for (const section of sections) {
    if (
      ((section.offsetTop - window.pageYOffset) * 100) / window.innerHeight >
      70
    ) {
      section.classList.remove("active");
    } else {
      section.classList.add("active");
    }
  }

  if (
    ((sections.item(3).offsetTop - window.pageYOffset) * 100) /
      window.innerHeight >
    35
  ) {
    astronaut.classList.remove("active");
  } else {
    astronaut.classList.add("active");
  }

  for (const quote of quotes) {
    if (
      ((sections.item(4).offsetTop + quote.offsetTop - window.pageYOffset) *
        100) /
        window.innerHeight >
      60
    ) {
      quote.classList.remove("active");
    } else {
      quote.classList.add("active");
    }
  }
}

const services = document.querySelectorAll(".boxServices div[class*='Box']");

for (const idx in services) {
  const scrollTwo = document.querySelector(".two .scroll");

  services[idx].onclick =  function () {

    scrollTwo.scrollTo({
      top: 0,
      left: (idx * services[0].offsetWidth) - 40,
      behavior: 'smooth'
    });
  };
}

const pickMes = document.querySelectorAll(".textInformation div[class*='Text'] .text button");
const package = document.querySelector("select[name='package']");
const form = document.querySelector(".five .form form");

for (const idx in pickMes) {

  pickMes[idx].onclick =  function () {
    package.value = pickMes[idx].value;
    window.scrollTo({
      top: form.offsetTop,
      behavior: 'smooth'
    });
  };
}