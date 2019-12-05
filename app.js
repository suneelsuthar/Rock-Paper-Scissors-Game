const game = () => {
  let pScore = 0;
  let cScore = 0;
  // start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro ");
    const match = document.querySelector(".match ");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
      console.log(hand)
  hand.addEventListener('animationend',function(){
this.style.animation =''
  })
});
    // computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //  computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //  call compare hand
        compareHand(this.textContent, computerChoice);
        // Update images
        playerHand.src = `./assests/${this.textContent}.png`;
        computerHand.src = `./assests/${computerChoice}.png`;

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHand = (playerChoice, computerChoice) => {
    // updata text
    const winner = document.querySelector(".winner");
    // checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // check for a rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
      } else {
        winner.textContent = "Compter Wins";
        cScore++;
        updateScore();

        return;
      }
    }

    // check for a paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();

        return;
      }
    }

    // check for a scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();

        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
