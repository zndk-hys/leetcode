import { arrayToList, type ListNode, listToArray } from "./lib/ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const head1 = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseList(head1))); // [5,4,3,2,1]

const head2 = arrayToList([1, 2]);
console.log(listToArray(reverseList(head2))); // [2,1]

const head3 = arrayToList([]);
console.log(listToArray(reverseList(head3))); // []
