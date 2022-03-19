// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Test - Encoding", () => {
    it ("should return an encoded message as a string of numbers", () => {
        const expected = '4432423352125413';
        const actual = polybius('thinkful');
        expect(actual).to.equal(expected);
    });

    it ("should maintain spaces", () => {
        const expected = '3251131343 2543241341';
        const actual = polybius('Hello world');
        expect(actual).to.equal(expected);
    });

    it ("should convert both letters 'i' and 'j' to 42 when encoding", () => {
        const expected = '42421551';
        const actual = polybius('jive');
        expect(actual).to.equal(expected);
    });
});


describe("Polybius Test - Decoding", () => {
    it ("should return a decoded message as a string of letters", () => {
        const expected = 'message';
        const actual = polybius('23513434112251', false);
        expect(actual).to.equal(expected); 
    });

    it ("should convert '42' to both 'i' and 'j' when decoding", () => {
        const expected = 'i/ji/jve';
        const actual = polybius('42421551', false);
        expect(actual).to.equal(expected);
    });

    it ("should maintain spaces", () => {
        const expected = 'a message';
        const actual = polybius('11 23513434112251', false);
        expect(actual).to.equal(expected);
    })
});


describe("Polybius Test Error Handling", () => {
    it ("should return 'false' if the number of characters to decode (excluding spaces) is odd", () => {
        const actual = polybius('44324233521254134', false);
        expect(actual).to.be.false;
    });
});