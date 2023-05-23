
let puzzleState = [1, 2, 3, 4, 5, 6, 7, 8, null];


function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


function isPuzzleSolved(state) {
  for (let i = 0; i < state.length; i++) {
    if (state[i] !== i + 1) {
      return false;
    }
  }
  return true;
}


function manhattanDistance(start, end) {
  const startX = start % 3;
  const startY = Math.floor(start / 3);
  const endX = end % 3;
  const endY = Math.floor(end / 3);
  return Math.abs(startX - endX) + Math.abs(startY - endY);
}


function calculateHeuristicCost(state) {
  let cost = 0;
  for (let i = 0; i < state.length; i++) {
    if (state[i] !== null) {
      cost += manhattanDistance(i, state[i] - 1);
    }
  }
  return cost;
}


function getPossibleMoves(state) {
  const moves = [];
  const emptyIndex = state.indexOf(null);
  const row = Math.floor(emptyIndex / 3);
  const col = emptyIndex % 3;

  if (row > 0) moves.push(emptyIndex - 3); 
  if (row < 2) moves.push(emptyIndex + 3); 
  if (col > 0) moves.push(emptyIndex - 1); 
  if (col < 2) moves.push(emptyIndex + 1); 

  return moves;
}


function moveTile(index) {
  const possibleMoves = getPossibleMoves(puzzleState);
  if (possibleMoves.includes(index)) {
    const emptyIndex = puzzleState.indexOf(null);
    swap(puzzleState, emptyIndex, index);
    updateUI();
    if (isPuzzleSolved(puzzleState)) {
      alert('Congratulations! Puzzle solved!');
    }
  }
}


function updateUI() {
  const tiles = document.getElementsByClassName('tile');
  for (let i = 0; i < puzzleState.length; i++) {
    tiles[i].innerHTML = puzzleState[i] ? puzzleState[i] : '';
  }
}


function solve() {
  
}


updateUI();



