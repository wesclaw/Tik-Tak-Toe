const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');

const cells = document.querySelectorAll('.cell');

const info = document.getElementById('info');

let go = 'x';

const restart_btn = document.getElementById('restart_btn')

function restartGame(){
  restart_btn.style.display = 'block'
  restart_btn.addEventListener('click',()=>{
    location.reload()
  })
}

function tieGame(){
  info.textContent = "It's a draw..."
  restartGame()
}



// need to know how to see whats inside the boxone inner html? i was looking
// to the classlist on the box1...box1 only has the cell class and box1 class.
// i thought the x class was inside the box1. the x class is only on the created element


function getWinner() {
  if (
    box1.innerHTML.includes('x') &&
    box2.innerHTML.includes('x') &&
    box3.innerHTML.includes('x')
  ) {
    box1.classList.add('win');
    box2.classList.add('win');
    box3.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box1.innerHTML.includes('o') &&
    box2.innerHTML.includes('o') &&
    box3.innerHTML.includes('o')
  ) {
    box1.classList.add('win');
    box2.classList.add('win');
    box3.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box4.innerHTML.includes('x') &&
    box5.innerHTML.includes('x') &&
    box6.innerHTML.includes('x')
  ) {
    box4.classList.add('win');
    box5.classList.add('win');
    box6.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box4.innerHTML.includes('o') &&
    box5.innerHTML.includes('o') &&
    box6.innerHTML.includes('o')
  ) {
    box4.classList.add('win');
    box5.classList.add('win');
    box6.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box7.innerHTML.includes('x') &&
    box8.innerHTML.includes('x') &&
    box9.innerHTML.includes('x')
  ) {
    box7.classList.add('win');
    box8.classList.add('win');
    box9.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box7.innerHTML.includes('o') &&
    box8.innerHTML.includes('o') &&
    box9.innerHTML.includes('o')
  ) {
    box7.classList.add('win');
    box8.classList.add('win');
    box9.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box1.innerHTML.includes('x') &&
    box4.innerHTML.includes('x') &&
    box7.innerHTML.includes('x')
  ) {
    box1.classList.add('win');
    box4.classList.add('win');
    box7.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box1.innerHTML.includes('o') &&
    box4.innerHTML.includes('o') &&
    box7.innerHTML.includes('o')
  ) {
    box1.classList.add('win');
    box4.classList.add('win');
    box7.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box2.innerHTML.includes('x') &&
    box5.innerHTML.includes('x') &&
    box8.innerHTML.includes('x')
  ) {
    box2.classList.add('win');
    box5.classList.add('win');
    box8.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box2.innerHTML.includes('o') &&
    box5.innerHTML.includes('o') &&
    box8.innerHTML.includes('o')
  ) {
    box2.classList.add('win');
    box5.classList.add('win');
    box8.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box3.innerHTML.includes('x') &&
    box6.innerHTML.includes('x') &&
    box9.innerHTML.includes('x')
  ) {
    box3.classList.add('win');
    box6.classList.add('win');
    box9.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box3.innerHTML.includes('o') &&
    box6.innerHTML.includes('o') &&
    box9.innerHTML.includes('o')
  ) {
    box3.classList.add('win');
    box6.classList.add('win');
    box9.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box1.innerHTML.includes('x') &&
    box5.innerHTML.includes('x') &&
    box9.innerHTML.includes('x')
  ) {
    box1.classList.add('win');
    box5.classList.add('win');
    box9.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box1.innerHTML.includes('o') &&
    box5.innerHTML.includes('o') &&
    box9.innerHTML.includes('o')
  ) {
    box1.classList.add('win');
    box5.classList.add('win');
    box9.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  } else if (
    box3.innerHTML.includes('x') &&
    box5.innerHTML.includes('x') &&
    box7.innerHTML.includes('x')
  ) {
    box3.classList.add('win');
    box5.classList.add('win');
    box7.classList.add('win');
    info.textContent = 'X wins!';
    restartGame()
  } else if (
    box3.innerHTML.includes('o') &&
    box5.innerHTML.includes('o') &&
    box7.innerHTML.includes('o')
  ) {
    box3.classList.add('win');
    box5.classList.add('win');
    box7.classList.add('win');
    info.textContent = 'O wins!';
    restartGame()
  }
  if (Array.from(cells).every(cell => {
      return cell.innerHTML.includes('x') || cell.innerHTML.includes('o');
    })
  ) {
    tieGame();
  }
}

cells.forEach(cell => {
  cell.addEventListener('click', goDisplay);
  function goDisplay() {
    const x = document.createElement('div');
    x.classList.add('x');
    const o = document.createElement('div');
    o.classList.add('o');
    if (go === 'x') {
      cell.append(x);
      go = 'o';
    } else {
      cell.append(o);
      go = 'x';
    }
    info.textContent = `It is now ${go}'s turn`;
    cell.removeEventListener('click', goDisplay);
    getWinner();
  }
});
