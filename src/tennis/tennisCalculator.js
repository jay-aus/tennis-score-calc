// tennisCalculator.js
const { validateInputString } = require('../validate/validate');
require('dotenv').config();
const { getRawFileData, transformAndExtractMatchData } = require('../util/util');
const { calculateMatchAndGameStats } = require('./statistics');
const { printFinalResult } = require('../tennis/printFinalResult'); // Import the print function

// Main function; starting point; invoke this based on user input
function TennisScoreCalculator(inputString) {
  const { statsType, statsTypeValue } = validateInputString(inputString);

  const filePath = process.env.FILEPATH; // Set the file path here
  const fileData = getRawFileData(filePath);
  if (!fileData) {
    throw new Error('No file data found');
  }

  const refinedFileData = transformAndExtractMatchData(fileData);

  const score = calculateMatchAndGameStats(refinedFileData, statsType, statsTypeValue);

  printFinalResult(score[0], statsType); // Use the print function
}

module.exports = {
  TennisScoreCalculator
};
