export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export function arrayToTree(
  arr: (number | null)[],
  idx: number = 0,
): TreeNode | null {
  if (idx >= arr.length) {
    return null;
  }

  if (arr[idx] === null) {
    return null;
  }

  return new TreeNode(
    arr[idx],
    arrayToTree(arr, idx * 2 + 1),
    arrayToTree(arr, idx * 2 + 2),
  );
}
