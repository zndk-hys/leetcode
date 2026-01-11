function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });

  let last = intervals[0];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];

    if (current[0] >= last[1]) {
      last = current;
    } else {
      count++;
    }
  }

  return count;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
); // 1
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]),
); // 2
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ]),
); // 0
