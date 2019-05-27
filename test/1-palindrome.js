/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const { isPalindrome } = require("../src/meetup-1/1-palindrome");

describe("palindromes", () => {
  it("should be able to determine if two strings are palindromes of each other", () => {
    const string1 = "anita lava la tina";
    const string2 = "anit al aval atina";

    expect(isPalindrome(string1, string2)).to.be.true;
    expect(isPalindrome(string2, string1)).to.be.true;
  });

  it("should work with other palindromes", () => {
    const string1 = "A Man, A Plan, A Canal-Panama";
    const string2 = "amanaP-lanaC A ,nalP A ,naM A";
    expect(isPalindrome(string1, string2)).to.be.true;
  });

  it("should return false when the strings provided are not palindromes", () => {
    const string1 = "This is a string";
    const string2 = "This is another string";
    expect(isPalindrome(string1, string2)).to.be.false;
  });
});
