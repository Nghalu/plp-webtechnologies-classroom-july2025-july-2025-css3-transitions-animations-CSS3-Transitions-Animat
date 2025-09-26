// Part 2: Functions, Scope, Parameters & Return Values
// Global variable
let animationCount = 0;

// Function with parameter & return value
function incrementCounter(step) {
  animationCount += step;
  return animationCount;
}

// Function to toggle animation on the box
function toggleBoxAnimation() {
  const box = document.querySelector('.box');
  box.classList.toggle('animate');

  // Using return value to track how many times box was animated
  const count = incrementCounter(1);
  console.log(`Box animated ${count} time(s).`);
}

// Attach event to button
document.getElementById('animateBtn').addEventListener('click', toggleBoxAnimation);

// Modal logic
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

function toggleModal(show) {
  if (show) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

// Events for modal
openBtn.addEventListener('click', () => toggleModal(true));
closeBtn.addEventListener('click', () => toggleModal(false));
