export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

export function arrayToList(arr: number[]): ListNode | null {
  let next: ListNode | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    const node: ListNode = new ListNode(arr[i], next);
    next = node;
  }
  return next;
}

export function listToArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}
