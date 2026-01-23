import { arrayToTree, type TreeNode } from "./lib/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const answer: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levels: number[] = [];
    const nums = queue.length;
    for (let i = 0; i < nums; i++) {
      const node = queue.shift() as TreeNode;
      levels.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    answer.push(levels);
  }

  return answer;
}

console.log(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]))); // [[3],[9,20],[15,7]]
console.log(levelOrder(arrayToTree([1]))); // [[1]]
console.log(levelOrder(arrayToTree([]))); // []
