function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const count = Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      count[strs[i][j].charCodeAt(0) - 97]++;
    }
    const key = count.join("_");

    const group = map.get(key) ?? [];
    group.push(strs[i]);
    map.set(key, group);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [""]
