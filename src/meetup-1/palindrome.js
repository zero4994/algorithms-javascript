/*
Write a function that checks if two strings are palindromes of each other.
*/

const isPalindrome = (a, b) => {
  const reversed = a
    .split("")
    .reverse()
    .join("");

  return reversed === b;
};

module.exports = { isPalindrome };
