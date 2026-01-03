import { arrayToList, type ListNode } from "./lib/ListNode";

function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>();

  while(head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }

  return false;
};

const list1 = arrayToList([3,2,0,-4]);
list1!.next!.next!.next!.next = list1!.next;
console.log(hasCycle(list1)); // true

const list2 = arrayToList([1,2]);
list2!.next!.next = list2;
console.log(hasCycle(list2)); // true

const list3 = arrayToList([1]);
console.log(hasCycle(list3)); // false