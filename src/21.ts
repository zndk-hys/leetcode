import { arrayToList, listToArray, ListNode } from "./lib/ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0, null);
  let current: ListNode | null = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }

    current = current.next;
  }

  current.next = list1 ?? list2;

  return dummy.next;
}

const data = [
  {
    list1: [1, 2, 4],
    list2: [1, 3, 4],
  },
  {
    list1: [],
    list2: [],
  },
  {
    list1: [],
    list2: [0],
  },
];

for (const d of data) {
  console.log(
    listToArray(mergeTwoLists(arrayToList(d.list1), arrayToList(d.list2))),
  );
}
// [1,1,2,3,4,4]
// []
// [0]
