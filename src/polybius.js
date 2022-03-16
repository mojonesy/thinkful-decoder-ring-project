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
    let result = '';
  }

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
