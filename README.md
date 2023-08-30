# Tennis Score Calculator

This is a Tennis Score Calculator application that allows you to calculate and display statistics for tennis matches and players.

## Features

- Calculate match and player statistics based on input data.
- Supports different types of statistics calculations (e.g., match, player).
- Flexible configuration of scoring rules using environment variables.

## Getting Started

1. **Installation**: Clone the repository and install the required dependencies.
   git clone https://github.com/jay-aus/tennis-score-calc.git
   cd TennisScore
   npm install

Environment Variables: Create a .env file in the root directory to configure scoring rules. An example .env file could look like this
FILEPATH='src/test/test.txt'
POINTS_NEEDED_TO_WIN_GAME=4
POINTS_DIFF_NEEDED_TO_WIN_GAME=2
MATCHES_TO_WIN_A_SET=6

# Run the Application: Run the application using Node.js.
node src/index.js

Usage
The application will prompt you for input strings that follow the specified format.
Based on the input, the application will calculate and display the relevant statistics.

Sample Input:
1. Score Match 01
2. Games Player Person A