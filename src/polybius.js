// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope



  function polybius(input, encode = true) {
    const alphabet = ['a','b','c','d','e','f','g','h','i/j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const polybiusSquare = [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55];
    let message = input.toLowerCase();
    let result = [];

    if (encode = true) {
      result = message.split('').map(([character]) => {
        let alphIndex;
        if (character === ' ') return ' ';
        if (character === 'i' || character === 'j') {
          return 42;
        } else {
          alphIndex = alphabet.indexOf(character);
        }
        return polybiusSquare[alphIndex];
      });
      return result.join('');
    }

    if (!encode) {
      let joinedNums = [];
      const splitNums = message.split('');
      for (let i = 0; i < splitNums.length; i+=2) {
        if (splitNums[i] === ' ') {
          joinedNums.push(' ');
          i--;
        } else {
          joinedNums.push(splitNums[i] + splitNums[i+1]);
        }
      }
      result = joinedNums.map((num) => {
        let polybiusIndex;
        if (num === ' ') return ' ';
        if (num === '42') {
          return 'i/j';
        } else {
          polybiusIndex = polybiusSquare.indexOf(parseInt(num));
        }
        return alphabet[polybiusIndex];
      });
      return result.join('');
    }
  }







  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
