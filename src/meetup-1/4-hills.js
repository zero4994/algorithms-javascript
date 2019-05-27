const isRoutePosible = (n, bridges) => {
  const start = bridges[0][0];
  let isGoalReached = false;
  let hasReachedStart = false;

  for (let i = 1; i < bridges.length; i++) {
    if (bridges[i - 1][1] !== bridges[i][0]) {
      return false;
    }
    if (bridges[i][1] === start) {
      hasReachedStart = true;
    }

    if (bridges[i][1] === n) {
      isGoalReached = true;
    }
  }

  return isGoalReached && hasReachedStart;
};

module.exports = { isRoutePosible };
