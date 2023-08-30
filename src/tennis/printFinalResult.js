// printResults.js

/**
 * This function prints the result on the console based on the type of user input
 * 
 * @param score Object either match object or consolidated user game data object
 * @param statsType String can be Player or Match
 */
function printFinalResult(score, statsType) {
    if (statsType === 'Match') {
      let winner = '';
  
      if (score.player1SetsWon > score.player2SetsWon) {
        winner = `${score.player1} defeated ${score.player2}\n${score.player1SetsWon} sets to ${score.player2SetsWon}`;
      } else if (score.player1SetsWon < score.player2SetsWon) {
        winner = `${score.player2} defeated ${score.player1}\n${score.player2SetsWon} sets to ${score.player1SetsWon}`;
      } else {
        console.log('Match in progress scenario encountered?');
      }
  
      /*  TO DO 
  
      Additional conditions to show match in progress? Per the original readme sample data; A wins 2 games but still wins the match 2 sets to 0
      Assuming it is a mistake??; this should be a match in progress scenario? Currently a set is 6 games won by a player
     
      */
  
      console.log(winner);
    } else if (statsType === 'Player') {
        console.log(`${score.totalGamesWon} ${score.totalGamesLost}`);
    }
  }
  
  module.exports = {
    printFinalResult
  };
  