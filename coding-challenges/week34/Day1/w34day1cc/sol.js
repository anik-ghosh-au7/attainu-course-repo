const get_pass = (days, costs) => {
  let dp = new Array(366).fill(0);
  let j = 0;
  for (let i = 1; i < 366; i++) {
    dp[i] = costs[0] + dp[i - 1];
    if (i - 7 >= 0) {
      dp[i] = Math.min(dp[i - 7] + costs[1], dp[i]);
    }
    if (i - 30 >= 0) {
      dp[i] = Math.min(dp[i - 30] + costs[2], dp[i]);
    }
    if (j < days.length && days[j] == i) {
      j++;
    } else {
      dp[i] = Math.min(dp[i], dp[i - 1]);
    }
  }
  return dp[365];
};

console.log(get_pass([1, 4, 6, 7, 8, 20], [2, 7, 15])); // 11
console.log(get_pass([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])); // 17
