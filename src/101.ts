import { arrayToTree, type TreeNode } from "./lib/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null && right === null) {
    return true;
  }

  if (left === null || right === null) {
    return false;
  }

  if (left.val !== right.val) {
    return false;
  }

  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

console.log(isSymmetric(arrayToTree([1, 2, 2, 3, 4, 4, 3]))); // true
console.log(isSymmetric(arrayToTree([1, 2, 2, null, 3, null, 3]))); // false
