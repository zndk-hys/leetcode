function dailyTemperatures(temperatures: number[]): number[] {
	if (temperatures.length === 0) return [];

	const t = temperatures;
	const answer = Array(t.length).fill(0);
	const stack: number[] = [];

	stack.push(t.length - 1);

	for (let i = t.length - 2; i >= 0; i--) {
		while (
			stack.length > 0 &&
			(t[stack[stack.length - 1] as number] as number) <= (t[i] as number)
		) {
			stack.pop();
		}

		if (stack.length !== 0) {
			answer[i] = (stack[stack.length - 1] as number) - i;
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
