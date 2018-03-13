function displayBoard(boardTest){
	boardTest.forEach(function(col){
		msg = ''
		col.forEach(i =>{
			msg += (i) ? i : ' ';
			msg += '|';
		})
		msg = msg.slice(0, -1); //remove last '|'
		if (col != boardTest.slice(-1)[0]){
			msg += '\n------';
		}
		console.log(msg);
	})
}

function markPosition(board, row, column, mark){
	if (board[row][column]){
		return false;
	}
	else { // is null
		board[row][column] = mark;
		return true;
	}
}

function whoIsTheWinner(board){
	// Check horizontals
	for (row of board){
		let rowSet = new Set(row);
		if (rowSet.size == 1){ // there is winner
			let winner = [...rowSet][0];
			return winner;
		}
	}

	// Check verticals
	for (let i=0;i<board[0].length; i++){
		let colSet = new Set();
		for (let j=0; j<board.length; j++){
			colSet.add(board[j][i])
		}
		if (colSet.size == 1){
			let winner = [...colSet][0];
			return winner;
		}
	}

	// Check diagonals
	let leftRightSet = new Set();
	for (r in board){
		leftRightSet.add(board[r][r]);
	}
	if (leftRightSet.size == 1){
		let winner = [...leftRightSet][0];
		return winner;
	}

	// RightLeft Diag
	let rightLeftSet = new Set();
	for (r in board){
		rightLeftSet.add(board[r][board.length - 1 - r]);
	}
	if (rightLeftSet.size == 1){
		let winner = [...rightLeftSet][0];
		return winner;
	}

	// No one
	return null;
};

function playGameSimulation(){
	const MAX_NUMBER_OF_MOVES = 9;

	const board = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];

	let currentPlayer = 'x';

	for (let i=0; i<MAX_NUMBER_OF_MOVES; i++){
		let marked = false;

		while (!marked){
			let randomRow = Math.floor((Math.random() * board.length));
			let randomColumn = Math.floor((Math.random() * board.length));
			marked = markPosition(board, randomRow, randomColumn, currentPlayer);
		}

		const winner = whoIsTheWinner(board);

		if (winner){
			console.log(`Player "${winner}" won!`);
			displayBoard(board);
			return;
		}
		else{
			currentPlayer = (currentPlayer == 'x') ? 'o' : 'x';
			displayBoard(board);
			console.log("******************"); 
		}
	}
}


playGameSimulation();