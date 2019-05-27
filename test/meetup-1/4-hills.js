/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const { isRoutePosible } = require("../../src/meetup-1/4-hills");

describe("Hills", () => {
  it("Must output true if the provided road is safe", () => {
    //         N = 4
    // M = [[1, 2], [2, 3], [3, 4], [4, 1]]
    // Output: "Yay!!"
    // Path/explanation: 1 -> 2 -> 3 -> 4 (treasure!) -> 1
    const n = 4;
    const m = [[1, 2], [2, 3], [3, 4], [4, 1]];
    const result = isRoutePosible(n, m);
    expect(result).to.be.true;
  });
});
