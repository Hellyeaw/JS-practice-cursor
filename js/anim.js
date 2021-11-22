// init Vars
let points = 0;
const pointsDisplay = document.querySelector('#points');
const incPoints = document.querySelectorAll('.btn');
const decPoints = document.querySelectorAll('.btn2');
const textDisplay = document.querySelector('#text');
const allBtns = incPoints.length + decPoints.length;
console.log(allBtns);

incPoints.forEach(function (btnf) {
  btnf.addEventListener('click', function () {
    this.style.display = 'none';
    points += 10;
    pointsDisplay.textContent = `Your points: ${points}`;
    pointCheck();
  });
});

function pointCheck() {
  if (points === 100) {
    pointsDisplay.textContent = `Your points: ${points}, YOU WIN!!`;
  }
};

decPoints.forEach((btnf2) => {
  btnf2.addEventListener('click', function () {
    points -= 10;
    this.style.display = 'none';
    pointsDisplay.textContent = `Your points: ${points}, Try again!`;
    pointcheck2();
  });
});

const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const cursor3 = document.querySelector('.cursor3');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('cursorinnerhover');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('cursorinnerhover');
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor2.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor3.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
