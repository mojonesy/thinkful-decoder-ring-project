// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope




  function caesar(input, shift, encode = true) {
    try {
      if (shift === 0) throw Error("Shift value cannot be 0.");
      if (shift < -25) throw Error("Shift value must be greater than -25.");
      if (shift > 25) throw Error("Shift value must be less than 25.");
    } catch (error) {
      console.log(`${error}`);
      return false;
    }

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let message = input.toLowerCase();
    let inputArray = [];
    for (let i = 0; i < message.length; i++) {
      inputArray.push(message[i]);              //input string is now an array of elements//
    }
    let result = [];
    inputArray.forEach(([element]) => {
      for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        if (element === letter) {                   //if message element matches letter in alphabet...
          const index = alphabet.indexOf(letter);
          let newLetter;
          newLetter = shiftAlphabetToRight(shift)[index];      //newLetter is equal to the element at the given index of the shifted alphabet//
          result.push(newLetter);                   
        }
      }
    });
    const output = result.join('');       //array is converted into a string//
    return output;
  }




  function shiftAlphabetToRight(shiftNumber) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < shiftNumber; i++) {
        alphabet.push(alphabet.shift());
    }
    return alphabet;
  }





  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
