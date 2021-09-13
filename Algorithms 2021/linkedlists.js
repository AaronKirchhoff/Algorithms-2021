// how to implement a list node in javascript
class ListNode {
  constructor(data, next) {
      this.data = data
      this.next = next || null                
  }
}

// how to implement a linked list class in javascript
class LinkedList{
  constructor(){
      this.head = null;
  }
  mergeTwoLists(l1,l2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while(l1 !== null && l2 !== null) {
      // keep getting 'data is undefined here'?????
      if(l1.data < l2.data) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
      dummy = dummy.next;
    }
    if(l1 !== null) {
      dummy.next = l1;
    } else {
      dummy.next = l2;
    }
    console.log(head.next);
    return head.next;
  }
}
// creating an object for the linkedlist class
// var callList = new LinkedList();
// console.log(callList.mergeTwoLists([1,3,5,7], [2,4,6,8]));

// ***********
// check to see if a linked list is even or odd in length
// create class
// have a coutn variable that you increment with every .next. then an if statemnt modulus % asking if % 2 = 0 return even, otherwise return odd.
// step 1. node class
// class myListNode {
//   constructor(data) {
//       this.data = data
//       this.next = null                
//   }
// }
//  linked list class find out if the list is even or odd length
class myLinkedList{
  constructor(){
      this.head = null;
  }
  evenCheck(){
    const linkedList = {
      val: 5,
      next: {
        val: 3,
        next: {
          val: 7,
          next: {
            val: 10,
            next: null,
          },
        },
      },
    };
    let currentNode = linkedList;
    let count = 0; 
    while (currentNode) {
        count++
        currentNode = currentNode.next
    }
    return count % 2 == 0 ? console.log('even') : console.log('odd')
  }
}
var callList = new myLinkedList();
callList.evenCheck();