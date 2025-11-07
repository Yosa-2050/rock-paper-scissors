let score = JSON.parse(localStorage.getItem ('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
       };

        updateScoreElement();
        
        function playGame( playerMove) {
             const computerMove =  pickcomputerMove();

            let result = '';

          if (playerMove === computerMove ) {
            result = 'tie';
           
          } else if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper') ){
              result = 'You win.';
            } else {
              result = 'You lose.';
            }

            if ( result === 'You win.') {
              score.wins += 1;
            }else if (result === 'You lose.') {
              score.losses += 1; 
            }else if ( result === 'Tie.') {
              score.ties  += 1;
            } 
            // we need to change it in to string using json.stringify to save
            localStorage.setItem('score', JSON.stringify(score));
         updateScoreElement();

         document.querySelector('.js-result').innerHTML = result;

         document.querySelector('.js-moves').innerHTML = 
         ` You
      <img src="images/${playerMove}-emoji.png"class="player-move-icon">
      <img src="images/${computerMove}-emoji.png"  class="player-move-icon">
      Computer`;
          
            
        }

        function updateScoreElement() {
           document.querySelector('.js-score').innerHTML = 
        `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

        }
        
          function pickcomputerMove (){
            const randomNumber = Math.random();
              
            let computerMove = '';
              if ( randomNumber >= 0 && randomNumber < 1/3) {
              computerMove = 'rock';
            } else if (
              randomNumber >= 1/3 && randomNumber < 2/3 
            ) {  computerMove = 'paper';}
            else if ( randomNumber >= 2/3 && randomNumber < 1) {
              computerMove = 'scissors';
            }

           return computerMove;
        }
     