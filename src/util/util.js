const fs = require('fs');

function getRawFileData(filePath) {
    try {
      const fileData = fs.readFileSync(filePath, 'utf8');
      return fileData;
    } catch (err) {
      throw new Error('Error reading file: ' + err.message);
    }
  }
  
  /**
   * Structure the raw file data in an array of objects; this will be used to filter based on user input selection
   * 
   * @param {String} fileData 
   * @returns {Array} Object Array
   * Sample value
   * [
    {
      Match: '01',
      Players: 'Person A vs Person B',
      Points: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]
    },
    {
      Match: '02',
      Players: 'Person A vs Person C',
      Points: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
      ]
    }
  ]
   */
  function transformAndExtractMatchData(fileData) {
    try {
      const lines = fileData.split('\n');
      const matches = [];
      let currentMatch = null;
  
      for (const line of lines) {
        if (line.startsWith('Match: ')) {
          if (currentMatch !== null) {
            matches.push(currentMatch);
          }
          const matchNumber = line.substring(7).trim();
          currentMatch = { Match: matchNumber };
        } else if (line.startsWith('Person')) {
          const players = line.substring(line.indexOf(':') + 1);
          currentMatch.Players = players.trim();
        } else if (line.trim() !== '') {
          const points = line.split(' ').map(Number);
          if (!currentMatch.Points) {
            currentMatch.Points = [];
          }
          currentMatch.Points.push(...points);
        }
      }
  
      if (currentMatch !== null) {
        matches.push(currentMatch);
      }
      return matches;
    } catch (err) {
      throw new Error('Error refining file data: ' + err.message);
    }
  }
  module.exports = {
    getRawFileData,
    transformAndExtractMatchData
  };
  