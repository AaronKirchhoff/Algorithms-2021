// Linked lists are awesome, they are stored in sequential order in memory meaning each node can be stroed anywhere because they remember they are part of a bigger list. unlike an array where each element needs to be stored right nest to eachother. adding and deleting elements is easy in a linked list, but you have to search from the start head node to get to that element, where as in an array you can pull from anywhere. 
// how to implement a list node in javascript
// now it's a doubly linked list
class ListNode {
  constructor(val, prev, next) {
      this.val = val
      this.next = next || null  
      this.prev = prev || null              
  }
}
// https://www.youtube.com/watch?v=ChWWEncl76Y
// how to implement a linked list class in javascript
class LinkedList{
  constructor(){
    this.head = this.tail = null;
  }

  // add to end of list
  append(value) {
  //   const linkedList = {
  //     val: 5,
  //     next: {
  //       val: 3,
  //       next: {
  //         val: 7,
  //         next: {
  //           val: 10,
  //           next: {
  //             val: 11,
  //               next: null,
  //           },
  //         },
  //       },
  //     },
  //   };
    // if list is empty..
    if (!this.tail){
      // set head and tail to be the value we pass in.
      this.head = this.tail = new ListNode(value)
    } else {
      // capture current tail node in variable
      let oldTail = this.tail
      // set new tail/append equal to new value we passed itd in
      this.tail = new ListNode(value)
      // old tail points to new tail
      oldTail.next = this.tail
      // new tail points back to old tail for doubly linked list
      this.tail.prev = oldTail
    }
    // return ListNode;

  }

  prepend(){

  }

  deleteHead() {

  }

  deleteTail(){

  }

  search(){


  }

  // leetcode 876
  middleOfList(){
    if(!this.head){
      return null
    } else {
      // if you iterarte through your list by changing this.head, head will be the last node for the rest of the function. if you want to iterate through again, you need to first set a variable to capture the head node to work with that instead.
      let headNode = this.head
      let listLength = 1;
      while(headNode.next){
        headNode = headNode.next
        listLength++;
      }
      listLength = listLength/2
      if((listLength % 2) != 0) {
        listLength = listLength -.5;
      }
      let deleteNumberOfTimes = parseInt(listLength);
      while (deleteNumberOfTimes){
        this.head = this.head.next;
        deleteNumberOfTimes--;
      }
    }
    return this.head;
  }

  // lettcodes answer for 876 middle or list
  // slow = fast = head;
  //   while (fast && fast.next) {
  //       slow = slow.next;
  //       fast = fast.next.next;
  //   }
  //   return slow;





















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
var callList = new LinkedList();
callList.append(4);
callList.append(5)
callList.append(3)
callList.append(7)
callList.append(9)

callList.append(9)
callList.append(8);

callList.middleOfList()
console.log(callList)

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
// callList.evenCheck();


// 237. Delete Node in a Linked List, leetcode
// assume we have our node class, with two properties, data and Next.

// then create a new class to put all your methods in.. call the constuctor to create instance of class and set our head to null.
// all values are unique, the paramter must not be the last tail node.
class DeleteListClass{
  constructor(){
    this.head=null;
  }
    deleteNode(list, node) {
    // const currentList = {
    //   val: 5,
    //   next: {
    //     val: 3,
    //     next: {
    //       val: 7,
    //       next: {
    //         val: 10,
    //         next: null,
    //       },
    //     },
    //   },
    // };
    // here creating a new node/ linked list to search through by passing list in you function call below.
    let newInstance = new ListNode(list)
    console.log(newInstance)
    // if (!this.head) {
    //   return null
    // } else {
      for (node in newInstance){
      node.val = node.next.val;
      node.next = node.next.next;
      }
      console.log(newInstance)

    // }
    return newInstance
  }
}
// const call = new DeleteListClass();
// call.deleteNode([4,6,3,7,8],3)

// leetcode reverse linked list, 9.24.21, #206
  function reverseList() {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let nextTemp = curr.next;
        // here we change direction of the list by saying the current.next but before you change the value, yo have to store it.
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
  }

  // 83. Remove Duplicates from Sorted List, leetcode
  // pretend we're passing in a linked list as head
  function removeDuplicates(head) {
    // [1,2,3,3,4,5,5,6]
    // compare values of this.head and this.head.next.value and if they are == then point to next.next. that should remove duplicates.
    let currentNode = head
    while(currentNode != null){
      if(currentNode.value === currentNode.next.value){
        currentNode.next = currentNode.next.next
      }
    }
    return head

  }

