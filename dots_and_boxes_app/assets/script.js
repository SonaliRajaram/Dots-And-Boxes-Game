const board = document.getElementById('board');
const turnDisplay = document.getElementById('turn');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset');

const size = 5; // Moderate grid size
let currentPlayer = 1;
let scores = { 1: 0, 2: 0 };
let totalBoxes = (size - 1) * (size - 1);
let filledBoxes = 0;

function createBoard() {
  board.innerHTML = '';

  for (let r = 0; r < size * 2 - 1; r++) {
    for (let c = 0; c < size * 2 - 1; c++) {
      if (r % 2 === 0 && c % 2 === 0) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        board.appendChild(dot);
      } else if (r % 2 === 0) {
        const line = document.createElement('div');
        line.classList.add('line', 'horizontal');
        line.dataset.row = r;
        line.dataset.col = c;
        line.addEventListener('click', handleLineClick);
        board.appendChild(line);
      } else if (c % 2 === 0) {
        const line = document.createElement('div');
        line.classList.add('line', 'vertical');
        line.dataset.row = r;
        line.dataset.col = c;
        line.addEventListener('click', handleLineClick);
        board.appendChild(line);
      } else {
        const box = document.createElement('div');
        box.classList.add('box');
        box.dataset.row = r;
        box.dataset.col = c;
        board.appendChild(box);
      }
    }
  }
}

function handleLineClick(e) {
  const line = e.target;
  if (line.style.background !== '') return;

  // Different color for each player
  line.style.background = currentPlayer === 1 ? '#FF6B6B' : '#4ECDC4';

  if (!checkCompletedBox(line)) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }

  turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;

  if (filledBoxes === totalBoxes) {
    declareWinner();
  }
}

function checkCompletedBox(line) {
  let completed = false;
  const row = parseInt(line.dataset.row);
  const col = parseInt(line.dataset.col);
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    const r = parseInt(box.dataset.row);
    const c = parseInt(box.dataset.col);
    const top = document.querySelector(`.line.horizontal[data-row="${r - 1}"][data-col="${c}"]`);
    const bottom = document.querySelector(`.line.horizontal[data-row="${r + 1}"][data-col="${c}"]`);
    const left = document.querySelector(`.line.vertical[data-row="${r}"][data-col="${c - 1}"]`);
    const right = document.querySelector(`.line.vertical[data-row="${r}"][data-col="${c + 1}"]`);

    if (top && bottom && left && right &&
      top.style.background !== '' &&
      bottom.style.background !== '' &&
      left.style.background !== '' &&
      right.style.background !== '' &&
      box.textContent === '') {

      box.textContent = currentPlayer === 1 ? 'A' : 'B';
      box.classList.add(currentPlayer === 1 ? 'player1' : 'player2');
      scores[currentPlayer]++;
      filledBoxes++;
      completed = true;
    }
  });

  return completed;
}

function declareWinner() {
  if (scores[1] > scores[2]) {
    winnerDisplay.textContent = '🏆 Player 1 Wins!';
  } else if (scores[2] > scores[1]) {
    winnerDisplay.textContent = '🏆 Player 2 Wins!';
  } else {
    winnerDisplay.textContent = '🤝 It\'s a Draw!';
  }
}

resetButton.addEventListener('click', () => {
  currentPlayer = 1;
  scores = { 1: 0, 2: 0 };
  filledBoxes = 0;
  winnerDisplay.textContent = '';
  turnDisplay.textContent = `Player 1's Turn`;
  createBoard();
});

createBoard();
