import { arrayToTree, type TreeNode } from "./lib/TreeNode";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  return left ?? right ?? null;
}

const root = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
// biome-ignore lint: testcode
console.log(lowestCommonAncestor(root, root!.left, root!.right)!.val); // 3

const root2 = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(
  // biome-ignore lint: testcode
  lowestCommonAncestor(root2, root2!.left, root2!.left!.right!.right)!.val,
); // 5

const root3 = arrayToTree([1, 2]);
// biome-ignore lint: testcode
console.log(lowestCommonAncestor(root3, root3, root3!.left)!.val); // 1
