import { arrayToList, type ListNode } from "./lib/ListNode";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return true;
  }

  // 真ん中まで進む
  let prev = null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast?.next) {
    fast = fast.next.next;
    const next = slow?.next as ListNode;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 奇数長なら一つ進める
  if (fast !== null) {
    slow = slow.next;
  }

  // 左右でそれぞれ進めて比較
  let right: ListNode | null = slow;
  let left: ListNode | null = prev;

  while (right && left) {
    if (right.val !== left.val) {
      return false;
    }
    right = right.next;
    left = left.next;
  }

  return true;
}

console.log(isPalindrome(arrayToList([1, 2, 2, 1]))); // true
console.log(isPalindrome(arrayToList([1, 2, 1]))); // true
console.log(isPalindrome(arrayToList([1, 2]))); // false
console.log(isPalindrome(arrayToList([1, 0, 0]))); // false
