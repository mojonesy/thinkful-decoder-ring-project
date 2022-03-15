// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

/*
describe ("Caesar Test", () => {
    it ("should encode a message by shifting letters a set number of times", () => {

    });

    it ("should decode a message by shifting letters a set number of times", () => {

    });

    it ("should maintain spaces and nonalphabetic symbols within shifting", () => {

    });

    it ("should ignore capital letters", () => {

    });

    it ("should shift letters towards the end of the alphabet to the beginning if necessary", () => {

    });

    it ("should allow a negative integer to shift letters to the left", () => {

    });
});
*/

describe("Caesar Test Errors", () => {
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
})