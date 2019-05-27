/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const { isRoutePosible } = require("../../src/meetup-1/4-hills");

describe("Hills", () => {
  it("Must output true if the provided road is safe", () => {
    const n = 4;
    const m = [[1, 2], [2, 3], [3, 4], [4, 1]];
    const result = isRoutePosible(n, m);
    expect(result).to.be.true;
  });

  it("Must output false if the provided route did not reach the goal", () => {
    const n = 4;
    const m = [[1, 2], [2, 3], [3, 1]];
    const result = isRoutePosible(n, m);
    expect(result).to.be.false;
  });
});
