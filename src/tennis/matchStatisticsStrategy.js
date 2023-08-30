require('dotenv').config();

function calculate(matchesData) {
    const POINTS_NEEDED_TO_WIN_GAME = process.env.POINTS_NEEDED_TO_WIN_GAME;
    const POINTS_DIFF_NEEDED_TO_WIN_GAME = process.env.POINTS_DIFF_NEEDED_TO_WIN_GAME;
    const MATCHES_TO_WIN_A_SET = parseInt(process.env.MATCHES_TO_WIN_A_SET, 10) || 6;
  
    function calculateMatchStats(match) {
      // Your existing matchStatistics function logic
      const points = match.Points;
      const [player1, player2] = match.Players.split(' vs ');
  
      let games1 = 0;
      let games2 = 0;
      let sets1 = 0;
      let sets2 = 0;
      let points1 = 0;
      let points2 = 0;
      let totalgames1 = 0;
      let totalgames2 = 0;
  
      for (const point of points) {
        if (point === 0) {
          points1++;
        } else if (point === 1) {
          points2++;
        }
  
        // game calculation; first to reach 4 points
        if (points1 >= POINTS_NEEDED_TO_WIN_GAME && points1 - points2 >= POINTS_DIFF_NEEDED_TO_WIN_GAME) {
          games1++;
          points1 = 0;
          points2 = 0;
        } else if (points2 >= POINTS_NEEDED_TO_WIN_GAME && points2 - points1 >= POINTS_DIFF_NEEDED_TO_WIN_GAME) {
          games2++;
          points1 = 0;
          points2 = 0;
        }
  
        // set calculation; 6 games
        if (games1 === MATCHES_TO_WIN_A_SET) {
          totalgames1 += games1;
          totalgames2 += games2;
          sets1++;
          games1 = 0;
          games2 = 0;
        } else if (games2 === MATCHES_TO_WIN_A_SET) {
          totalgames1 += games1;
          totalgames2 += games2;
          sets2++;
          games1 = 0;
          games2 = 0;
        }
      }
  
      totalgames1 += games1;
      totalgames2 += games2;
  
      return {
        player1: player1,
        player2: player2,
        player1GamesWon: totalgames1,
        player2GamesWon: totalgames2,
        player1SetsWon: sets1,
        player2SetsWon: sets2
      };
    }
  
    return matchesData.map(calculateMatchStats);
  }
  
  module.exports = {
    calculate
  };
  