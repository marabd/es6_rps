let user_record = 0;
let computer_record = 0;
let tie_record = 0;


$('.userSelect').on('click', (e) => {
    let id = e.target.id || e.target.parentElement.id;
    userChoice(id);
})

const userChoice = (el) => {
  computerChoice(el);
}

$('#reset').on('click', (e) => {
    reset();
})

// $('#recReset').on('click', (e) => {
//     recReset();
// })
const computerChoice = (user) => {
	let choices = ['Rock', 'Paper', 'Scissors'];
	let computer;
	let index = Math.floor(Math.random() * 3);
	if(index === 0) {
		computer = "rock";
	} else if (index === 1) {
		computer = "paper";
	} else if (index === 2) {
		computer = "scissors";
	}
	show(user, computer)
}

const comp_output = () => {
	return document.getElementById('comp_output');
}

const user_output = () => {
	return document.getElementById('user_output');
}

const show = (user, computer) => {
	comp_output().innerHTML = (computer);
	user_output().innerHTML = (user);
	game(user, computer)
}

const winner_output = () => {
	return document.getElementById('winner_output');
}

const game = (user, computer) => {
	if (user === computer) {
		winner_output().innerHTML = "You Tied";
	} else if (user == 'rock') {
		if (computer == 'paper') {
			winner_output().innerHTML = "You Lost";
		} else {
			winner_output().innerHTML = "You Win!";
		}
	} else if (user == 'paper') {
		if (computer == 'rock') {
			winner_output().innerHTML = "You Win!";
		} else {
			winner_output().innerHTML = "You Lost";
		}
	} else if (user = 'scissors') {
		if (computer == 'rock') {
			winner_output().innerHTML = "You Lost";
		} else {
			winner_output().innerHTML = "You Win!";
		}
	}
	records(winner_output().innerHTML)
}

// const ties = () => {
// 	return document.getElementById('ties');
// }

const records = (outcome) => {
	if (outcome === "You Win!") {
		user_score.innerHTML = (user_record += 1);
	} else if (outcome === "You Lost") {
		computer_score.innerHTML = (computer_record += 1);
	} else if (outcome === "You Tied") {
		ties.innerHTML = (tie_record += 1);
	}
}

const reset = () => {
	comp_output().innerHTML = "";
	user_output().innerHTML = "";
	winner_output().innerHTML = "";
	user_score.innerHTML = "0";
	computer_score.innerHTML = "0";
	ties.innerHTML = "0";
}
