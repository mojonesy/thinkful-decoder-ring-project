// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {



//Substitution function//
  function substitution(input, alphabet, encode = true) {
  //Error handling//
    try {                                                   
      if (!alphabet || alphabet.length !== 26) throw Error("Alphabet must contain 26 characters.");
      else {
        const alphArr = alphabet.split('');
        let result = false;
        result = alphArr.some((char, index) => {
          return alphArr.indexOf(char) !== index
        });
        if (result) throw Error("Alphabet must contain completely unique characters.");
      }
    }
    catch (error) {
      console.log(`${error}`);
      return false;
    }

    if (encode) return encoder(input, alphabet);    //If input is set to encode, refer to helper function 1 'encoder' below//
    if (!encode) return decoder(input, alphabet);   //If input is set to decode, refer to helper function 2 'decoder' below//

  }


//Helper function 1 - 'encoder'//
  function encoder(input, alphabet) {
    const standardAlph = 'abcdefghijklmnopqrstuvwxyz';
    const message = input.toLowerCase();
    const givenAlph = alphabet.toLowerCase();
    let output = '';

    for (let i = 0; i < message.length; i++) {
      const character = message[i];
      if (!standardAlph.includes(character)) {
        output += character;
      }
      else {
        for (let j = 0; j < standardAlph.length; j++) {
          if (character === standardAlph[j]) {
            output += givenAlph[j];
          }
        }
      }
    }
    return output;
  }

  
//Helper function 2 - 'decoder'//
  function decoder(input, alphabet) {
    const standardAlph = 'abcdefghijklmnopqrstuvwxyz';
    const message = input.toLowerCase();
    const givenAlph = alphabet.toLowerCase();
    let output = '';

    for (let i = 0; i < message.length; i++) {
      const character = message[i];
      if (character === ' ') {
        output += ' ';
      }
      else {
        for (let j = 0; j < givenAlph.length; j++) {
          if (character === givenAlph[j]) {
            output += standardAlph[j];
          }
        }
      }
    }
    return output;
  }


//Return substitution function//
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
