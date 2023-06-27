const { validateInputString } = require('../validate/validate');

describe('validateInputString', () => {
  it('should return statsType and statsTypeValue for Match input', () => {
    const inputString = 'Score Match 02';
    const expectedOutput = { statsType: 'Match', statsTypeValue: '02' };

    const result = validateInputString(inputString);

    expect(result).toEqual(expectedOutput);
  });

  it('should return statsType and statsTypeValue for Player input', () => {
    const inputString = 'Games Player Person A';
    const expectedOutput = { statsType: 'Player', statsTypeValue: 'Person A' };

    const result = validateInputString(inputString);

    expect(result).toEqual(expectedOutput);
  });

  it('should throw an error for invalid input string', () => {
    const inputString = 'Invalid input';
    const expectedError = 'Invalid input string. Please check your input.';

    expect(() => {
      validateInputString(inputString);
    }).toThrow(expectedError);
  });

  it('should throw an error for missing Match number', () => {
    const inputString = 'Score Match';
    const expectedError = 'Match number not found. Please check your input string.';

    expect(() => {
      validateInputString(inputString);
    }).toThrow(expectedError);
  });

  it('should throw an error for missing Player name', () => {
    const inputString = 'Games Player';
    const expectedError = 'Player name not found. Please check your input string.';

    expect(() => {
      validateInputString(inputString);
    }).toThrow(expectedError);
  });
});
