function climbStairs(n: number): number {
  let x = 1;
  let y = 1;

  for (let i = 2; i <= n; i++) {
    [x, y] = [y, x + y];
  }

  return y;
}

console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
