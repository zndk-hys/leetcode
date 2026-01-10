function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const answer: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = answer[answer.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      answer.push(current);
    }
  }

  return answer;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
); // [[1,6],[8,10],[15,18]]

console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
); // [[1,5]]

console.log(
  merge([
    [4, 7],
    [1, 4],
  ]),
); // [[1,7]]
