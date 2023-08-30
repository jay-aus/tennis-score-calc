const matchStatisticsStrategy = require('./matchStatisticsStrategy');
const gameStatisticsStrategy = require('./gameStatisticsStrategy');

function getStrategy(statsType) {
  if (statsType === 'Match') {
    return matchStatisticsStrategy;
  } else if (statsType === 'Player') {
    return gameStatisticsStrategy;
  }
}

module.exports = {
  getStrategy
};
