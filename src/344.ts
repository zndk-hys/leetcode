function reverseString(s: string[]): void {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
}

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // ["o","l","l","e","h"]

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // ["h","a","n","n","a","H"];
