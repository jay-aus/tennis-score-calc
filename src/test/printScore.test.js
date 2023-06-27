const fs = require('fs');
const { getRawFileData, getRefineFileData, calculateMatchAndGameStats, matchStatistics } = require('../printScore');

describe('getRawFileData', () => {
  test('should read file data correctly', () => {
    const filePath = 'src/test/test.txt';
    const expectedFileData = 'Match 01 Player A vs Player C 0 0 0 0 1 1 1 1 0 0 0 0';

    // Mock the fs.readFileSync function
    jest.spyOn(fs, 'readFileSync').mockReturnValue(expectedFileData);

    // Call the function and expect the result
    const result = getRawFileData(filePath);
    expect(result).toBe(expectedFileData);

    // Restore the original implementation of fs.readFileSync
    fs.readFileSync.mockRestore();
  });

  test('should throw an error if file reading fails', () => {
    const filePath = 'src/test/nonexistent.txt'; // Provide a nonexistent file path
    const errorMessage = 'Error reading file: File not found'; // Set the expected error message

    // Mock the fs.readFileSync function to throw an error
    jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
      throw new Error('File not found');
    });

    // Call the function and expect it to throw an error
    expect(() => {
      getRawFileData(filePath);
    }).toThrow(errorMessage);

    // Restore the original implementation of fs.readFileSync
    fs.readFileSync.mockRestore();
  });
});

describe('getRefineFileData', () => {
  it('should refine the file data correctly', () => {
    const fileData = `Match: 01
Person A vs Person B
0`;

    const expectedMatches = [
      {
        Match: '01',
        Players: 'Person A vs Person B',
        Points: Array(1).fill(0),
      },
    ];

    const result = getRefineFileData(fileData);

    expect(result).toEqual(expectedMatches);
  });
});

describe('calculateMatchAndGameStats', () => {
  const matchesData = [
    {
      Match: '01',
      Players: 'Person A vs Person B',
      Points: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      Match: '02',
      Players: 'Person A vs Person C',
      Points: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
      ],
    },
  ];

  it('should calculate match statistics correctly', () => {
    const statsType = 'Match';
    const statsTypeValue = '01';
    const expectedScore = {
      player1: 'Person A',
      player2: 'Person B',
      player1GamesWon: 6,
      player2GamesWon: 0,
      player1SetsWon: 1,
      player2SetsWon: 0,
    };

    const score = calculateMatchAndGameStats(matchesData, statsType, statsTypeValue);

    expect(score).toEqual(expectedScore);
  });

  it('should calculate game statistics correctly', () => {
    const statsType = 'Player';
    const statsTypeValue = 'Person A';
    const expectedScore = {
      playerName: 'Person A',
      totalGamesWon: 11,
      totalGamesLost: 1,
    };

    const score = calculateMatchAndGameStats(matchesData, statsType, statsTypeValue);

    expect(score).toEqual(expectedScore);
  });
});

describe('matchStatistics', () => {
  it('should calculate match statistics correctly', () => {
    // Define the input match object
    const match = {
      Match: '01',
      Players: 'Person A vs Person B',
      Points: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
      ]
    };

    // Define the expected output
    const expectedStatistics = {
      player1: 'Person A',
      player2: 'Person B',
      player1GamesWon: 5,
      player2GamesWon: 1,
      player1SetsWon: 0,
      player2SetsWon: 0
    };

    // Call the function with the input match object
    const result = matchStatistics(match);

    // Assert the output matches the expected statistics
    expect(result).toEqual(expectedStatistics);
  });
});


