// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope



  function substitution(input, alphabet, encode = true) {
//Error handling//
    try {                                                   
      if (!alphabet || alphabet.length !== 26) throw Error("Alphabet must contain 26 characters.");
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j] === alphabet[i]) throw Error("Alphabet must contain completely unique characters.");
        }
      }
    }
    catch (error) {
      console.log(`${error}`);
      return false;
    }
  }



  return {
    substitution,
  };
})();



module.exports = { substitution: substitutionModule.substitution };
