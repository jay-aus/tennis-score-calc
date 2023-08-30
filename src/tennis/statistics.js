// statistics.js
const strategyFactory = require('./statisticsStrategyFactory');

function calculateMatchAndGameStats(matchesData, statsType, statsTypeValue) {
  const strategy = strategyFactory.getStrategy(statsType);
  if (!strategy) {
    throw new Error('Invalid statistics type');
  }

  return strategy.calculate(matchesData, statsTypeValue);
}

module.exports = {
  calculateMatchAndGameStats
};
