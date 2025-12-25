function evalRPN(tokens: string[]): number {
	const stack: number[] = [];

	for (let i = 0; i < tokens.length; i++) {
		const num = parseInt(tokens[i], 10);

		if (Number.isNaN(num)) {
			const x = stack.pop() as number;
			const y = stack.pop() as number;

			switch (tokens[i]) {
				case "+":
					stack.push(y + x);
					break;
				case "-":
					stack.push(y - x);
					break;
				case "*":
					stack.push(y * x);
					break;
				case "/":
					stack.push(Math.trunc(y / x));
					break;
			}
		} else {
			stack.push(num);
		}
	}

	return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
	evalRPN([
		"10",
		"6",
		"9",
		"3",
		"+",
		"-11",
		"*",
		"/",
		"*",
		"17",
		"+",
		"5",
		"+",
	]),
); // 22
