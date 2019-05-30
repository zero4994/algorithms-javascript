/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const { countIslands } = require("../../src/meetup-1/4-islands");

describe("Islands", () => {
  it("Must output the correct number or non connected islands", () => {
    const map = [[1, 0, 0], [0, 0, 0], [0, 0, 1]];
    const result = countIslands(map);
    expect(result).to.equal(2);
  });
});
