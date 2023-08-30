// gameStatisticsStrategy.js
function calculate(matchesData) {
    function calculatePlayerStats(playerMatches, playerName) {
      let totalGamesWonByPlayer = 0;
      let totalGamesLostByPlayer = 0;
  
      for (const item of playerMatches) {
        const matchResult = calculateMatchStats(item);
  
        if (matchResult.player1 === playerName) {
          totalGamesWonByPlayer += matchResult.player1GamesWon;
          totalGamesLostByPlayer += matchResult.player2GamesWon;
        } else if (matchResult.player2 === playerName) {
          totalGamesWonByPlayer += matchResult.player2GamesWon;
          totalGamesLostByPlayer += matchResult.player1GamesWon;
        }
      }
  
      return {
        playerName: playerName,
        totalGamesWon: totalGamesWonByPlayer,
        totalGamesLost: totalGamesLostByPlayer
      };
    }
  
    function calculateMatchStats(match) {
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
          if (points1 >= 4 && points1 - points2 >= 2) {
            games1++;
            points1 = 0;
            points2 = 0;
          } else if (points2 >= 4 && points2 - points1 >= 2) {
            games2++;
            points1 = 0;
            points2 = 0;
          }
      
          // set calculation; 6 games
          if (games1 === 6) {
            totalgames1 += games1;
            totalgames2 += games2;
            sets1++;
            games1 = 0;
            games2 = 0;
          } else if (games2 === 6) {
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
  
    const playerNames = new Set();
    for (const match of matchesData) {
      const [player1, player2] = match.Players.split(' vs ');
      playerNames.add(player1);
      playerNames.add(player2);
    }
  
    const playerStats = [];
    for (const playerName of playerNames) {
      const playerMatches = matchesData.filter(match =>
        match.Players.includes(playerName)
      );
      const playerStat = calculatePlayerStats(playerMatches, playerName);
      playerStats.push(playerStat);
    }
  
    return playerStats;
  }
  
  module.exports = {
    calculate
  };
  