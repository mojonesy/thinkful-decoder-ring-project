// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope





  function caesar(input, shift, encode = true) {
    try {
      if (shift === 0) throw newError("Shift value cannot be 0.");
      if (shift < -25) throw newError("Shift value must be greater than -25.");
      if (shift > 25) throw newError("Shift value must be less than 25.");
    } catch (error) {
      return false;
    }

    
  }







  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
