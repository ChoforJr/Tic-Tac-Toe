const TicTacToe = (function() {

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

    //Name Changer start
    const player1Name = document.querySelector("#player1Name");
    const player1DisplayName = document.querySelector("#player1DisplayName");
    const player1DisplayScore = document.querySelector("#player1DisplayScore");
    let player1;
    const player1Btn = document.querySelector(".player1Btn").addEventListener("click", (event) =>{
      if (player1Name.value.trim() === '') {
        alert('Please enter a Name');
        return;
      }
        event.preventDefault();
        player1Score = 0;
        document.querySelector("#player1ScoreOutput").textContent = `0`;
        player1DisplayName.textContent = `${player1Name.value}`;
        player1DisplayScore.textContent = `${player1Name.value}'s Score: `;
        player1 = `${player1DisplayName.textContent}`;
        player1Name.value = '';
    });

    const player2Name = document.querySelector("#player2Name");
    const player2DisplayName = document.querySelector("#player2DisplayName");
    const player2DisplayScore = document.querySelector("#player2DisplayScore");
    let player2;
    const player2Btn = document.querySelector(".player2Btn").addEventListener("click", (event) =>{
      if (player2Name.value.trim() === '') {
        alert('Please enter a Name');
        return;
      }
        event.preventDefault();
        player2Score = 0;
        document.querySelector("#player2ScoreOutput").textContent = `0`;
        player2DisplayName.textContent = `${player2Name.value}`;
        player2DisplayScore.textContent = `${player2Name.value}'s Score: `;
        player2 = `${player2DisplayName.textContent}`;
        player2Name.value = '';
    });
    //Name Changer end

    const resultDisplay = document.querySelector('#resultDisplay');

    //Logic of the board buttons start here, this is the button Function
    const boardBtn = document.querySelectorAll('.boardBtn').forEach((button) => {
      button.addEventListener('click', btnAction);
    });
    function btnAction(event) {
      let btn = event.target.id; 
      if (event.ctrlKey){
        if(player1Win === 3) return;
        if(player2Win === 3) return;
        if(playerContainer.length === 9) return;
        if(!playerContainer.includes(btn)) {
          document.querySelector(`#${btn}`).textContent ='x';
        }
        gamePlay(btn,null);
        document.querySelector("#player1ScoreOutput").textContent = `${player1Score}`;
      }else if (event.shiftKey){
        if(player1Win === 3) return;
        if(player2Win === 3) return;
        if(playerContainer.length === 9) return;
        if(!playerContainer.includes(btn)) {
          document.querySelector(`#${btn}`).textContent ='o';
        }
        gamePlay(null,btn);
        document.querySelector("#player2ScoreOutput").textContent = `${player2Score}`;
      }
    }

    //Game play Function
    const gamePlay = (player1Input,player2Input) => {
      if(playerContainer.includes(player1Input) || playerContainer.includes(player2Input)) {
        return alert("already selected");
      }

      if(typeof player1Input == "string"){
        playerContainer.push(player1Input);
      }
      if(typeof player2Input == "string"){
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
          if(player1 == undefined){
            return resultDisplay.textContent = `Player 1 is the winner, start a new game`;
          }
          return resultDisplay.textContent = `${player1} is the winner, start a new game`;
        }
        if(player1Win !== 3) player1Win=0;

        winConditions[prop].forEach(element => {
          if(element === 'o'){
            player2Win++;
          }
        });
        if(player2Win === 3) {
          player2Score++;
          if(player2 == undefined){
            return resultDisplay.textContent = `Player 2 is the winner, start a new game`;
          }
          return resultDisplay.textContent = `${player2} is the winner, start a new game`;
        }
        if(player2Win !== 3) player2Win=0;
      }
      if(playerContainer.length === 9) return resultDisplay.textContent = `Its a draw, start a new game`;
    };

    //Restart Function
    const restartBtn = document.querySelector('#restartBtn').addEventListener('click', () =>{
      resultDisplay.textContent = `Come on! start the game`;
      playerContainer.length = 0;
      player1Win = 0;
      player2Win = 0;
      for (let prop in winConditions){
        winConditions[prop] = winConditions[prop].filter(e => e !== 'x');
        winConditions[prop] = winConditions[prop].filter(e => e !== 'o');
      }
      document.querySelectorAll('.boardBtn').forEach( (button) => {
        button.textContent ='';
      });
    });

    return {
      boardBtn,
      winConditions,
      playerContainer,
      player1Btn,
      player2Btn,
      restartBtn,
    }
  })();

//TicTacToe.gamePlay();  TicTacToe.winConditions;   TicTacToe.playerContainer;   TicTacToe.reStart();