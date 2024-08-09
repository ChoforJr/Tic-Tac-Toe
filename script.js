const TicTacToe = (function() {
    const gameBoard = ['A','B','C','D','E','F','G','H','I'];

    const winConditions = {
      cond1 :['A','B','C'],
      cond2 :['D','E','F'],
      cond3 :['G','H','I'],
      cond4 :['A','E','I'],
      cond5 :['G','E','C'],
      cond6 :['A','D','G'],
      cond7 :['B','E','H'],
      cond8 :['C','F','I']
    };

    const playerContainer =[];

    let player1Win = 0;
    let player2Win = 0;

    let player1Score = 0;
    let player2Score = 0;

    document.querySelector("#player1ScoreOutput").textContent = `${player1Score}`;
    document.querySelector("#player2ScoreOutput").textContent = `${player2Score}`;

    const gamePlay = (player1,player2) => {
      if(player1Win === 3) return alert("player 1 is the winner, start a new game");
      if(player2Win === 3) return alert("player 2 is the winner, start a new game");
      if(playerContainer.length === 9) return alert("Its a draw, start a new game");

      if(player1 && player2) return console.log("One player at a time");
      if(!player1 && !player2) return console.log("Don't you want to play?");

      let player1Input
      let player2Input

      if(player1) {
        player1Input = prompt('Your move player 1');
        player1Input = player1Input.toString().toUpperCase();
      }else if(player2) {
        player2Input = prompt('Your move player 2');
        player2Input = player2Input.toString().toUpperCase();
      }

      if(gameBoard.includes(player1Input) || gameBoard.includes(player2Input)) {
      }else{
        return console.log("Wrong input");
      }

      if(playerContainer.includes(player1Input) || playerContainer.includes(player2Input)) {
        return console.log("already selected");
      }

      if(player1) {
        playerContainer.push(player1Input);
      }
      if(player2) {
        playerContainer.push(player2Input);
      }

      for(let prop in winConditions){
        if (winConditions[prop].includes(player1Input)) {
          winConditions[prop].push('x');
        }
        if (winConditions[prop].includes(player2Input)) {
          winConditions[prop].push('o');
        }

        winConditions[prop].forEach(element => {
          if(element === 'x'){
            player1Win++;
          }
        });
        if(player1Win === 3) {
          player1Score++;
          return alert("player 1 is the winner, start a new game");
        }
        if(player1Win !== 3) player1Win=0;

        winConditions[prop].forEach(element => {
          if(element === 'o'){
            player2Win++;
          }
        });
        if(player2Win === 3) {
          player2Score++;
          return alert("player 2 is the winner, start a new game");
        }
        if(player2Win !== 3) player2Win=0;
      }
      if(playerContainer.length === 9) return alert("Its a draw, start a new game");
    };

    const reStart = () =>{
      playerContainer.length = 0;
      player1Win = 0;
      player2Win = 0;
      for (let prop in winConditions){
        winConditions[prop] = winConditions[prop].filter(e => e !== 'x');
        winConditions[prop] = winConditions[prop].filter(e => e !== 'o');
      }
    };

    return {
      gamePlay,
      winConditions,
      playerContainer,
      reStart,
    }
  })();

//TicTacToe.gamePlay();  TicTacToe.winConditions;   TicTacToe.playerContainer;   TicTacToe.reStart();
//For player 1 - TicTacToe.gamePlay(true, false);   For player 2 - TicTacToe.gamePlay(false,true);

const NameChanger = (function() {
  const player1Name = document.querySelector("#player1Name");
  const player1DisplayName = document.querySelector("#player1DisplayName");
  const player1DisplayScore = document.querySelector("#player1DisplayScore");
  const player1Btn = document.querySelector(".player1Btn").addEventListener("click", (event) =>{
    if (player1Name.value.trim() === '') {
      alert('Please enter a Name');
      return;
    }
    if (event.ctrlKey){
      event.preventDefault();
      player1DisplayName.textContent = `${player1Name.value}`;
      player1DisplayScore.textContent = `${player1Name.value}'s Score: `;
      player1Name.value = '';
    }
  })

  const player2Name = document.querySelector("#player2Name");
  const player2DisplayName = document.querySelector("#player2DisplayName");
  const player2DisplayScore = document.querySelector("#player2DisplayScore");
  const player2Btn = document.querySelector(".player2Btn").addEventListener("click", (event) =>{
    if (player2Name.value.trim() === '') {
      alert('Please enter a Name');
      return;
    }
    if (event.shiftKey){
      event.preventDefault();
      player2DisplayName.textContent = `${player2Name.value}`;
      player2DisplayScore.textContent = `${player2Name.value}'s Score: `;
      player2Name.value = '';
    }
  })
  return {
    player1Btn,
    player2Btn,
  }
})();
