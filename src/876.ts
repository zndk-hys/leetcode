import { arrayToList, listToArray, type ListNode } from "./lib/ListNode";

function middleNode(head: ListNode | null): ListNode | null {
  let middle = head;
  let current = head;

  while (current !== null && current.next !== null) {
    current = current.next.next;
    // biome-ignore lint:not null
    middle = middle!.next;
  }

  return middle;
}

const head1 = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(middleNode(head1))); // [3,4,5]

const head2 = arrayToList([1, 2, 3, 4, 5, 6]);
console.log(listToArray(middleNode(head2))); // [4,5,6]
