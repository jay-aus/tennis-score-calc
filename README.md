# Tennis Score Calculator
The Tennis Score Calculator is a JavaScript program that reads data from a file and performs calculations to determine match and game statistics. It provides functionality to extract specific information based on user input.

# Prerequisites
Node.js environment
The required dependencies (fs, dotenv, and the custom validate module)

# Installation
Clone the repository or download the code files.

Install the dependencies by running the following command in the project directory:

1. npm install
2. Set the file path in the .env file.

# Usage
The Tennis Score Calculator can be invoked using the TennisScoreCalculator function. It takes an input string as a parameter, which follows specific rules defined in the `validateInputString` module.

**TennisScoreCalculator(inputString);**

Eg: 
1. TennisScoreCalculator('Games Player Person A'); // Output: 23 17
2. TennisScoreCalculator('Score Match 02'); // Output: Person C defeated Person A \n 2 sets to 1

You can do a npm run start to execute the command.
If you wish to change the input text; you can do so. Save it and execute npm run start

Test file is located in src/test/test.txt

# Functions
## getRawFileData(filePath)
This function reads the contents of the specified file synchronously using fs.readFileSync and returns the file data as a string.

## getRefineFileData(fileData)
This function processes the raw file data and structures it into an array of objects. Each object represents a match and contains information such as match number, players, and points.

## calculateMatchAndGameStats(matchesData, statsType, statsTypeValue)
This function calculates the match and game statistics based on the refined file data, the desired statistics type (either "Match" or "Player"), and the corresponding value.

## gameStatistics(matches, statsTypeValue)
This function calculates the consolidated game statistics for a specific player based on their matches.

## matchStatistics(match)
This function calculates the match statistics based on the points scored by each player in the match.

## printFinalResult(score, statsType)
This function prints the final result on the console based on the type of user input and the calculated score.

# Configuration
To configure the Tennis Score Calculator, set the file path in the .env file to the location of the input file containing the match data.

# TO DO
Unit test cases
Additional conditions to show match in progress?

# Assumption/Questions
Per the original readme sample data; A wins 2 games but still wins the match 2 sets to 0
Assuming it is a mistake??; this should be a match in progress scenario? Currently a set is 6 games won by a player
