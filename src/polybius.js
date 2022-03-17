// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope



  function polybius(input, encode = true) {
    try {                                                           //Check for input errors//
      if (!encode && ((input.replace(' ', '').length) % 2) != 0) {
        throw Error("The length of all numbers should be even.");
      }
    } catch (error) {
      console.log(`${error}`);
      return false;
    }

    const alphabet = ['a','b','c','d','e','f','g','h','i/j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const polybiusSquare = [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55];
    let message = input.toLowerCase();
    let result = '';

    if (encode) {
        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (char === ' ') {
                result += ' ';
            } else if (char === 'i' || char === 'j') {
                result += 42;
            } else {
                for (let j = 0; j < alphabet.length; j++) {
                    const letter = alphabet[j];
                    if (char === letter) {
                        result += polybiusSquare[j];
                    }
                }
            }
        }
    }

    if (!encode) {
        for (let i = 0; i < message.length; i+=2) {
          if (message[i] === ' ') {
            result += ' ';
            i--;
          } else if ( (message[i] + message[i+1]) === '42') {
            result += 'i/j';
          }
          else {
            for (let j = 0; j < polybiusSquare.length; j++) {
              if ( parseInt((message[i] + message[i+1])) === polybiusSquare[j]) {
                result += alphabet[j];
              }
            }
          }
        }
    }

    return result;
  }





  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
