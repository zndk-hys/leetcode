import { arrayToTree, type TreeNode } from "./lib/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];

  const save = (root: TreeNode | null, depth: number) => {
    if (root === null) {
      return;
    }

    if (answer.length === depth) {
      answer.push([]);
    }
    answer[depth].push(root.val);

    save(root.left, depth + 1);
    save(root.right, depth + 1);
  };

  save(root, 0);

  return answer;
}

console.log(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]))); // [[3],[9,20],[15,7]]
console.log(levelOrder(arrayToTree([1]))); // [[1]]
console.log(levelOrder(arrayToTree([]))); // []
