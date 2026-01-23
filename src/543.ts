import { arrayToTree, type TreeNode } from "./lib/TreeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  const depth = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    }

    const leftDepth = depth(root.left);
    const rightDepth = depth(root.right);

    max = Math.max(max, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  };

  if (root === null) {
    return 0;
  }

  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);

  return Math.max(max, leftDepth + rightDepth);
}

console.log(diameterOfBinaryTree(arrayToTree([1, 2, 3, 4, 5]))); // 3
console.log(diameterOfBinaryTree(arrayToTree([1, 2]))); // 1
