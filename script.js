const sudokuPuzzles = [
    [
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9]
    ],
    [
        [null, 2, null, 6, null, 8, null, null, null],
        [5, 8, null, null, null, 9, 7, null, null],
        [null, null, null, null, 4, null, null, null, null],
        [3, 7, null, null, null, null, 5, null, null],
        [6, null, null, null, null, null, null, null, 4],
        [null, null, 8, null, null, null, null, 1, 3],
        [null, null, null, null, 2, null, null, null, null],
        [null, null, 9, 8, null, null, null, 3, 6],
        [null, null, null, 3, null, 6, null, 9, null]
    ]
    // More puzzles can be added here
];

function createSudokuBoard(board) {
    const tbody = document.getElementById('sudoku-board');
    tbody.innerHTML = '';
    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            if (board[row][col] !== null) {
                td.textContent = board[row][col];
                td.classList.add('fixed');
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.addEventListener('input', (e) => {
                    const value = e.target.value;
                    if (value < '1' || value > '9') {
                        e.target.value = '';
                    }
                });
                td.appendChild(input);
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function generateRandomSudoku() {
    const randomIndex = Math.floor(Math.random() * sudokuPuzzles.length);
    return sudokuPuzzles[randomIndex];
}

document.getElementById('new-game-button').addEventListener('click', () => {
    const newBoard = generateRandomSudoku();
    createSudokuBoard(newBoard);
});

// Initialize the first board
createSudokuBoard(generateRandomSudoku());