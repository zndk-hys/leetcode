import { arrayToTree, type TreeNode } from "./lib/TreeNode";

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

console.log(maxDepth(arrayToTree([3, 9, 20, null, null, 15, 7]))); // 3
console.log(maxDepth(arrayToTree([1, null, 2]))); // 2
