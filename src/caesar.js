// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  

//Caesar function//
  function caesar(input, shift, encode = true) {
  //Error handling//
    try {                                                         
      if (shift === 0) throw Error("Shift value cannot be 0.");
      if (shift < -25 || shift > 25) throw Error("Shift value must be between -25 and 25.")
    } catch (error) {
      console.log(`${error}`);
      return false;
    }

    if (encode) {                     //If input is set to encode, refer to helper function 1 'encoder' below//
      return encoder(input, shift);
    }
    else {                            //If input is set to decode, refer to helper function 2 'decoder' below//
      return decoder(input, shift);
    }
  }


  //Helper function 1 - 'encoder'//
  function encoder(input, shift) {
    const newInput = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let message = '';

    for (let i = 0; i < newInput.length; i++) {
      const letter = newInput[i];
      if (!alphabet.includes(letter)) {
        message = message + letter;
      }
      else {
        const index = alphabet.indexOf(letter);
        let newIndex = index + shift;
        if (newIndex >= 26) {
          newIndex = newIndex - 26;
        }
        if (newIndex < 0) {
          newIndex = newIndex + 26;
        }
        message = message + alphabet[newIndex];
      }
    }
    return message;
  }


//Helper function 2 - 'decoder'//
  function decoder(input, shift) {
    const newInput = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let message = '';

    for (let i = 0; i < newInput.length; i++) {
      const letter = newInput[i];
      if (!alphabet.includes(letter)) {
        message = message + letter;
      }
      else {
        const index = alphabet.indexOf(letter);
        let newIndex;
        if (shift >= 0) {
          newIndex = index - shift;
        }
        else {
          newIndex = index - (shift + 26);
        }
        if (newIndex < 0) {
          newIndex = newIndex + 26;
        }
        if (newIndex >= 26) {
          newIndex = newIndex - 26;
        }
        message = message + alphabet[newIndex];
      }
    }
    return message;
  }



//Return caesar function//
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
