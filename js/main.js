
const wrapper = document.querySelector('.wrapper');
const card = document.querySelector('.card');
const title = document.querySelector('.card__title');
const didMoroz = document.querySelector('.card__did-moroz-img');
const christmasTree = document.querySelector('.card__christmass-tree-img');
const countdownElement = document.getElementById('countdown');

console.log(didMoroz);
console.log(christmasTree);

wrapper.addEventListener('mousemove', rotate => {
  let x = (innerWidth / 2 - rotate.pageX) / 20;
  let y = (innerHeight / 2 - rotate.pageY) / 20;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

wrapper.addEventListener('mouseover', () => {
  title.style.transform = `translate3d(0, 0, 100px)`;
  didMoroz.style.transform = `translate3d(0, 0, 200px)`;
  christmasTree.style.transform = `translate3d(0, 0, 60px)`;
  card.style.transition = `all 0.1s ease`;
});

wrapper.addEventListener('mouseout', () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `all 0.5s ease`;
  title.style.transform = `translate3d(0, 0, 0)`;
  didMoroz.style.transform = `translate3d(0, 0, 0)`;
  christmasTree.style.transform = `translate3d(0, 0, 0)`;
});

// Calculate remaining time until New Year's
const countdownDate = new Date('January 1, 2024 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown element
  countdownElement.innerHTML = `<h2> <p>ОСТАЛОСЬ</p>  <p>${days}д  ${hours}ч ${minutes}м ${seconds}с</p> </h2>`;

  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Start the countdown
updateCountdown();