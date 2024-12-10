const boardSize = 5; // Dimensions of the game grid (5x5)
const gameBoard = document.getElementById("game-board");
const resetButton = document.getElementById("reset-button");

// Create and initialize the game grid
function initializeGameBoard() {
  gameBoard.innerHTML = ""; // Clear the existing game board
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    if (Math.random() < 0.5) {
      cell.classList.add("is-off"); // Randomly set some cells as "off"
    }
    cell.addEventListener("click", () => handleCellClick(i));
    gameBoard.appendChild(cell); // Add the cell to the game board
  }
}

// Handle cell clicks to toggle lights
function handleCellClick(index) {
  const cells = document.querySelectorAll(".square");

  // Toggle the light state of a specific cell
  const toggleCellState = (i) => {
    if (i >= 0 && i < cells.length) {
      cells[i].classList.toggle("is-off");
    }
  };

  const row = Math.floor(index / boardSize);
  const col = index % boardSize;

  // Toggle the clicked cell
  toggleCellState(index);

  // Toggle the adjacent cells (up, down, left, right)
  if (row > 0) toggleCellState(index - boardSize); // Above
  if (row < boardSize - 1) toggleCellState(index + boardSize); // Below
  if (col > 0) toggleCellState(index - 1); // Left
  if (col < boardSize - 1) toggleCellState(index + 1); // Right

  verifyGameWin(); // Check if the player has won
}

// Check if all lights are turned off
function verifyGameWin() {
  const cells = document.querySelectorAll(".square");
  const allLightsOff = Array.from(cells).every((cell) =>
    cell.classList.contains("is-off")
  );

  if (allLightsOff) {
    alert("Congratulations! You turned off all the lights!");
  }
}

// Reset the game by reinitializing the board
resetButton.addEventListener("click", initializeGameBoard);

// Start the game when the page loads
initializeGameBoard();
