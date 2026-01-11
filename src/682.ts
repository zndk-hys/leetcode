function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    const o = operations[i];
    switch (o) {
      case "+":
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      case "D":
        stack.push(stack[stack.length - 1] * 2);
        break;
      case "C":
        stack.pop();
        break;
      default:
        stack.push(Number(o));
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(calPoints(["1", "C"])); // 0
