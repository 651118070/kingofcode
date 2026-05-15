const menu = document.querySelector(".menu");
const navbar = document.querySelector("#mobileMenu");
const closeMenu = document.querySelector("#closeMenu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  navbar.classList.toggle("-translate-y-full");
  navbar.classList.toggle("translate-y-0");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("translate-y-0");
  navbar.classList.add("-translate-y-full");

  menu.classList.remove("active");
});
const counters = document.querySelectorAll('.counter');

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');

    let count = 0;

    const updateCounter = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerHTML = `<span class="text-orange">+</span>${Math.ceil(count)}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerHTML = `<span class="text-orange">+</span>${target}`;
      }
    };

    updateCounter();
  });
};


// INTERSECTION OBSERVER
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      if (entry.target.querySelector('.counter')) {
        startCounter();
      }
    }
  });
}, {
  threshold: 0.3
});


document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

  const btn = accordion.querySelector(".accordion-btn");
  const content = accordion.querySelector(".accordion-content");
  const icon = accordion.querySelector(".accordion-icon");
  const title = accordion.querySelector(".accordion-title");
  const bar = accordion.querySelector(".active-bar");

  btn.addEventListener("click", () => {

    const isHidden = content.classList.contains("hidden");

    // CLOSE ALL
    accordions.forEach((item) => {

      item.querySelector(".accordion-content")
        .classList.add("hidden");

      item.querySelector(".accordion-icon")
        .classList.remove("fa-angle-up");

      item.querySelector(".accordion-icon")
        .classList.add("fa-angle-down");

      item.querySelector(".accordion-title")
        .classList.remove("text-orange-500");

      item.querySelector(".accordion-title")
        .classList.add("text-[#6e6e6e]");

      item.querySelector(".active-bar")
        .classList.add("hidden");

    });

    // OPEN CURRENT
    if (isHidden) {

      content.classList.remove("hidden");

      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");

      title.classList.remove("text-[#6e6e6e]");
      title.classList.add("text-orange-500");

      bar.classList.remove("hidden");

    }

  });

});
const track = document.getElementById("scrollTrack");

let position = 0;
let isPaused = false;

track.addEventListener("mouseenter", () => {
  isPaused = true;
});

track.addEventListener("mouseleave", () => {
  isPaused = false;
});

function autoScroll() {

  if (!isPaused) {
    position -= 1;
  }

  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(autoScroll);
}

autoScroll();
  // PAUSE ON HOVER
  track.addEventListener("mouseenter", () => {
    speed = 0;
  });
  
  track.addEventListener("mouseleave", () => {
    speed = 1;
  });