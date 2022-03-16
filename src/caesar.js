// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope




  function caesar(input, shift, encode = true) {
    try {
      if (shift === 0) throw Error("Shift value cannot be 0.");
      if (shift < -25 || shift > 25) throw Error("Shift value must be between -25 and 25.")
    } catch (error) {
      console.log(`${error}`);
      return false;
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    encode = false ? shift *= -1 : shift *= 1;      //If set to decode, shift is set to a negative integer// 
    let message = input
      .toLowerCase()
      .split('');
    
    let result = [];
    message.forEach(([element]) => {
      for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        if (!element === letter) result.push(element);
        if (element === letter) {                   //if message element matches letter in alphabet...
          const index = alphabet.indexOf(letter);
          let newLetter;
            if (shift >= 1) {
              newLetter = shiftAlphabetToLeft(shift)[index];      //newLetter is equal to the element at the given index of the shifted alphabet//
              result.push(newLetter);
            }
            if (shift <= -1) {
              newLetter = shiftAlphabetToRight(shift)[index];
              result.push(newLetter);
            }
        }
      }
    });
    return result.join('');
  }



  function shiftAlphabetToLeft(shiftNumber) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < shiftNumber; i++) {
        alphabet.push(alphabet.shift());
    }
    return alphabet;
  }

  function shiftAlphabetToRight(shiftNumber) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    shiftNumber *= -1;
    for (let i = 0; i < shiftNumber; i++) {
      alphabet.unshift(alphabet.pop());
    }
    return alphabet;
  }




  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
