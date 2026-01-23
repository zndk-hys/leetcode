import { arrayToList, type ListNode } from "./lib/ListNode";

function isPalindrome(head: ListNode | null): boolean {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left++] !== arr[right--]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(arrayToList([1, 2, 2, 1]))); // true
console.log(isPalindrome(arrayToList([1, 2]))); // false
