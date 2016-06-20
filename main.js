const userChoice = () => {
  let user = n;

}

const computerChoice = () => {
	let choices = ['Rock', 'Paper', 'Scissors'];
	let index = Math.floor(Math.random() * 3);
	if(index === 0) {
		let computer = "rock";
	} else if (index === 1) {
		let computer = "paper";
	} else if (index === 2) {
		let computer = "scissors";
	}
	show(user, computer)
}

const show = () => {
	comp_output.innerHTML = (computer);
	user_output.innerHTML = (user);
	game(user, computer)
}

const game = () => {
	if ()
}

start();
