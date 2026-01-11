function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    const group = map.get(key) ?? [];
    group.push(strs[i]);
    map.set(key, group);
  }

  const answer = [];
  for (const [_, value] of map) {
    answer.push(value);
  }

  return answer;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [""]
