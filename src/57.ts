function insert(intervals: number[][], newInterval: number[]): number[][] {
  const answer: number[][] = [];
  let i = 0;

  while (i < intervals.length) {
    if (intervals[i][1] >= newInterval[0]) {
      break;
    }
    answer.push(intervals[i]);
    i++;
  }

  const target = newInterval;
  while (
    i < intervals.length &&
    intervals[i][0] <= newInterval[1] &&
    intervals[i][1] >= newInterval[0]
  ) {
    target[0] = Math.min(intervals[i][0], newInterval[0]);
    target[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  answer.push(target);

  while (i < intervals.length) {
    answer.push(intervals[i]);
    i++;
  }

  return answer;
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
); // [[1,5],[6,9]]

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
); // [[1,2],[3,10],[12,16]]
