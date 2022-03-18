const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("Substitution Test - Encoding", () => {
    it ("should return an encoded message using a given substitution alphabet", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });

    it ("should maintain spaces throughout", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });

    it ("should ignore capital letters", () => {
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });

    it ("should return an encoded message when given an alphabet including special characters", () => {
        const actual = substitution("message", "ifdlert^&%$vbz!@asp[]+-0.,");
        const expected = "beppite";
        expect(actual).to.equal(expected);
    });
});

describe("Substitution Test - Decoding", () => {
    it ("should return a decoded message using a given substitution alphabet", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it ("should maintain spaces throughout", () => {
        const actual = substitution("I beppite", "ifdlert^&%$vbz!@asp[]+-0.,", false);
        const expected = "a message";
        expect(actual).to.equal(expected);
    });

    it ("should ignore capital letters", () => {
        const actual = substitution("JRufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it ("should return a decoded message when given an alphabet including special characters", () => {
        const actual = substitution("beppite", "ifdlert^&%$vbz!@asp[]+-0.,", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
});


describe("Substitution Test Error Handling", () => {
    it ("should return 'false' if the given alphabet does not contain exactly 26 characters", () => {
        const actual = substitution("thinkful", "alphabet");
        expect(actual).to.be.false;
    });

    it ("should return 'false' if the given alphabet contains repeated characters", () => {
        const actual = substitution("thinkful", "#aseldhheighaa$$AslekhgWW@a");
        expect(actual).to.be.false;
    });

    it ("should return 'false' is no alphabet is given", () => {
        const actual = substitution("message", false);
        expect(actual).to.be.false;
    });
});