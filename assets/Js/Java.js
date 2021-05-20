"use restrict";

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
