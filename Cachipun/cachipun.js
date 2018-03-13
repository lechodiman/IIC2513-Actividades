
function getRandomElement(arr){
	rand = arr[Math.floor((Math.random() * arr.length))];
	return rand;
}

function selectWinner(options, preference1, preference2){
	if (preference1 == preference2){
		return -1;
	}
	else if (preference1 === options.paper && preference2 === options.rock){
		return 0;
	}
	else if (preference1 === options.rock && preference2 === options.scissors){
		return 0;
	}
	else if (preference1 === options.scissors && preference2 === options.paper) {
		return 0;
	}
	else{
		return 1;
	}
}

function simulateGame(options){
	const OPTIONS_VALUES = Object.values(options)

	const preferenceFirstUser = getRandomElement(OPTIONS_VALUES);
	const preferenceSecondUser = getRandomElement(OPTIONS_VALUES);

	console.log("PreferenceFirstUser: " + preferenceFirstUser);
	console.log("PreferenceSecondUser: " + preferenceSecondUser);

	const winner = selectWinner(options, preferenceFirstUser, preferenceSecondUser);

	if (winner === -1){
		console.log("It\'s a tie");
	}
	else{
		console.log(`Player ${winner + 1} wins`);
	}
}

function simulateGameWithTurns(options, turns){
	const winners = [];
	for (let i=0; i<turns; i++){
		const OPTIONS_VALUES = Object.values(options)

		const preferenceFirstUser = getRandomElement(OPTIONS_VALUES);
		const preferenceSecondUser = getRandomElement(OPTIONS_VALUES);

		console.log("PreferenceFirstUser: " + preferenceFirstUser);
		console.log("PreferenceSecondUser: " + preferenceSecondUser);

		const winner = selectWinner(options, preferenceFirstUser, preferenceSecondUser);
		winners.push(winner);

		if (winner === -1){
			console.log("It\'s a tie");
		}
		else{
			console.log(`Player ${winner + 1} wins`);
		}
	}
	console.log(winners);
}


// main

const OPTIONS = {
	paper: 'Papel',
	rock: 'Piedra',
	scissors: 'Tijeras'
};


// simulateGame(OPTIONS);
simulateGameWithTurns(OPTIONS, 6);
