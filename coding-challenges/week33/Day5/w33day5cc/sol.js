const minFallingPathSum = (A) => {
  let n = A.length;
  for (let R = n - 2; R >= 0; R--) {
    for (let C = 0; C < n; C++) {
      let best = A[R + 1][C];

      if (C > 0) best = Math.min(best, A[R + 1][C - 1]);

      if (C + 1 < n) best = Math.min(best, A[R + 1][C + 1]);

      A[R][C] = A[R][C] + best;
    }
  }
  ans = 9999999;

  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, A[0][i]);
  }
  return ans;
};

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
