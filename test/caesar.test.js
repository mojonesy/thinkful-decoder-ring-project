// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe ("Caesar Test", () => {
    it ("should encode a message by shifting characters/letters a set number of times", () => {
        const actual = caesar('this is a secret message!', 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    });

    it ("should ignore capital letters", () => {
        const actual = caesar('THIS is a SECRET message!', 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    });

    it ("should maintain spaces and nonalphabetic symbols within shifting", () => {
        const actual = 'bpqa qa i amkzmb umaaiom!';
        const expected = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it ("should shift letters towards the end of the alphabet to the beginning if necessary", () => {
        const actual = 'xqvvwnz';
        const expected = caesar('Buzzard', -4);
        expect(actual).to.equal(expected);
    });

    it ("should allow a negative integer to shift characters/letters to the left", () => {
        const actual = 'qefkhcri';
        const expected = caesar('thinkful', -3);
        expect(actual).to.equal(expected);
    });

});


describe("Caesar Test - Decoding", () => {
    it ("should decode a message by shifting characters/letters a set number of times in the opposite direction", () => {
        const actual = 'thinkful';
        const expected = caesar('wklqnixo', 3, false);
        expect(actual).to.equal(expected);
    });

    it ("should ignore capital letters", () => {
        const actual = 'this is a secret message!';
        const expected = caesar('BPQA qa I AMKZMB umaaiom!', 8, false);
        expect(actual).to.equal(expected);
    });

    it ("should maintain spaces and nonalphabetic symbols within shifting", () => {
        const actual = 'this is a !@$#%^ message!';
        const expected = caesar('bpqa qa i !@$#%^ umaaiom!', 8, false);
        expect(actual).to.equal(expected);
    });

    it ("should shift letters towards the end of the alphabet to the beginning if necessary", () => {
        const actual = 'buzzard';
        const expected = caesar('xqvvwnz', -4, false);
        expect(actual).to.equal(expected);
    });

    it ("should allow a negative integer to shift characters/letters to the left", () => {
        const actual = 'thinkful';
        const expected = caesar('qefkhcri', -3, false);
        expect(actual).to.equal(expected);
    })

})


describe("Caesar Test Error Handling", () => {
    it ("should return false if shift value is equal to 0", () => {
        const actual = caesar("thinkful", 0);
        expect(actual).to.be.false;
    });

    it ("should return false if shift value is less than -25", () => {
        const actual = caesar("thinkful", -27);
        expect(actual).to.be.false;
    });

    it ("should return false if shift value is greater than 25", () => {
        const actual = caesar("thinkful", 30);
        expect(actual).to.be.false;
    });
});