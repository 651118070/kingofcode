const counters = document.querySelectorAll('.counter');

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');

    let count = 0;

    const updateCounter = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerHTML = `<span class="text-orange"></span>${Math.ceil(count)}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerHTML = `<span class="text-orange"></span>${target}`;
      }
    };

    updateCounter();
  });
};
