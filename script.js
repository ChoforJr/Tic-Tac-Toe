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
    const gamePlay = () => {
      let playerInput = prompt('Your move buddy');
      playerInput = playerInput.toString().toUpperCase();
      if(!gameBoard.includes(playerInput)) return console.log("Wrong input");
      if(playerContainer.includes(playerInput)) return console.log("already selected");
      playerContainer.push(playerInput);
      for(let prop in winConditions){
        if (winConditions[prop].includes(playerInput)) winConditions[prop].push('x');
        if (winConditions[prop].length ===6) return alert('You win');
      }
    };
    return {
      gamePlay,
      winConditions,
      playerContainer,
    }
  })();
const player1 = TicTacToe;
//player1.gamePlay(); player1.winConditions; player1.playerContainer
