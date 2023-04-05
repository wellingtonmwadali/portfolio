let lowest ,highest, number, currentTrials;

		function startGame() {
		let	lowest = parseInt(document.getElementById("lowest").value);
		let	highest = parseInt(document.getElementById("highest").value);
			//number = random.integer(lowest, highest);
    number = Math.floor(Math.random() * (highest - lowest + 1)) + lowest
    trials = Math.floor(Math.log2(highest - lowest + 1)) + 1;
    currentTrial = 1;
    alert('You have ' + trials + ' trials to guess the number.Enter valid numbers from range');
    //else if (number > highest){
      alert('Please enter valid numbers for the range.');
    //}
			 document.getElementById("game").style.display = "block";
			document.getElementById("result").innerHTML = "";
			document.getElementById("count").innerHTML = "";
		}


		function makeGuess() {
			const guess = parseInt(document.getElementById("guess").value);
			if (guess === number) {
				//currentTrial++;
				document.getElementById("result").innerHTML = `Congratulations! You guessed the number ${number} in ${trials} tries.`;
				//document.getElementById("count").innerHTML = `Number of guesses: ${trials}`;
				//document.getElementById("game").style.display = "none";
			} else if (guess < number) {
				//currentTrial++;
				//document.getElementById("result").innerHTML = `Too low! Try again.`;
        alert('Your guess is low :().We go again.')
			} else if (guess > number) {
				//currentTrials++;
				//document.getElementById("result").innerHTML = `Too high! Try again.`;
        alert('Your guess is high :().We go again.')
			}
      else
      //document.getElementById("result").innerHTML = `stick to the range`;
      //CurrentTrials++;
      alert('you win' )
    currentTrial++;
    if (currentTrial > trials) {
    alert('Waiting for you in round two.');
    window.location.reload();
    }
  }