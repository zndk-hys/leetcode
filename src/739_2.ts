function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length === 0) return [];

  const t = temperatures;
  const answer = Array(t.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < t.length; i++) {
    while (
      stack.length > 0 &&
      (t[i] as number) > (t[stack[stack.length - 1] as number] as number)
    ) {
      const d = stack.pop() as number;
      answer[d] = i - d;
    }
    stack.push(i);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([30, 40, 50, 60]));
// [1,1,1,0]

console.log(dailyTemperatures([30, 60, 90]));
// [1,1,0]

console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));
// [8,1,5,4,3,2,1,1,0,0]
