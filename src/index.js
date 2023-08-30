// Import necessary modules and libraries
const readline = require('readline');
const { TennisScoreCalculator } = require('./tennis/tennisCalculator');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Main function; starting point; invoke this based on user input
function main() {
  rl.question('Enter input string: ', (inputString) => {
    TennisScoreCalculator(inputString);
    // Close the readline interface
    rl.close();
  });
}

// Call the main function
main();
