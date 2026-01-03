import { arrayToList, type ListNode } from "./lib/ListNode";

function hasCycle(head: ListNode | null): boolean {
  let fast = head?.next ?? null;
  let slow = head;

  while (fast) {
    if (slow === fast) {
      return true;
    }
    fast = fast.next?.next ?? null;
    slow = slow?.next ?? null;
  }

  return false;
}

const list1 = arrayToList([3, 2, 0, -4]);
// biome-ignore lint: testcode
list1!.next!.next!.next!.next = list1!.next;
console.log(hasCycle(list1)); // true

const list2 = arrayToList([1, 2]);
// biome-ignore lint: testcode
list2!.next!.next = list2;
console.log(hasCycle(list2)); // true

const list3 = arrayToList([1]);
console.log(hasCycle(list3)); // false
