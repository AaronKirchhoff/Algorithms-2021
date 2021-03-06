// leetcode, 938. Range Sum of BST, traverse a Binary Search Tree, and given two out of bounds values, add all the node value in between and equal to the out of bounds intigers and return the running sum of those values.

// https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846
        // now we need to search the whole tree, checking every node to see if it is between our given out-of-bounds integers... but how should we do this? there are multiple ways to search a tree.
        // there are two categories for searching a tree... 
        // Breadth-First Search-- where you start at the root, and then check each depth across the tree before going deeper, like floors in a building... the root being the top floor, then check all the rooms on the 19th floor, the all rooms on 18th floor, and so on...
        //  Depth-First Search-- finds the bottom of the tree first and flows upward, always trying to return the lowest node, but there are three common DFS... inorder traversal, preorder traversal, postorder traversal.
        // a.inorder traversal-- go to the left node from root, travel all the way down as far as you can
        // b. preorder traversal-- return root first, then go left and return nodes as you go, recursive
        // c. postorder traversal-- Where we visit the left subtree and the right subtree before visiting the current node in recursion

// here to establish what val, and left and right nodes are, we have to create a class called TreeNode. we even added some error checking if root or values are null.
// create classes to create the binary search tree, you have a node class to represent the nodes in the tree with three data properties, val, left and right.
// class TreeNode {
//   constructor(val){
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//   }
// }
// class TreeNode {
//   constructor(data){
//     this.data = (data===undefined ? 0 : data);
//     this.left = (left===undefined ? null : left);
//     this.right = (right===undefined ? null : right);
//   }
// }

// class BinarySearchTree {
  // A constructor is a function that creates an instance of a class which is typically called an ???object???. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.
    // constructor(){
    //   this.root = null;
    
    
    // var rangeSumBST = function(root, low, high) {
      // 1. declare empty sum variable...
      // let sum =0;
        // lets do DFS, Depth first search, and only add to our current sum if the value is between the range given.

        // and we need a helper fucntion recursion, what???
      // function helperdfs(node){
      //   if (!node){
      //     return;
      //   }
      //   if (node.val >= low && node.val <= high){
      //     sum += node.val;
      //   }
      //   if(low < node.val){
      //     helperdfs(node.left)
      //   }
      //   if( high > node.val){
      //     helperdfs(node.right)
      //   }
      // }
      // we created that helper function so we need to call it...
  //     helperdfs(root);
  //     console.log(sum);
  //     return sum;
  //   }
  // }
  // rangeSumBST(root = [10,5,15,3,7,null,18], low = 7, high = 15);
// };

// I dont understand what exactly the calsses are, and why they are important and how to use them? im not getting a sum here. its like the function doesn't recognize the right, left and val from the TreeNode? how to connect them?


// ************
// 9/9/21 binary search tree starter... only for trees where the left nodes are smaller than the ones onf the right. following code won't work for plain binary tree.
// 1. define a binary tree node, every node has three properties... and a constructor method to create an instance or object of the class TreeNode

// folowing this video, im at 8:29 https://www.youtube.com/watch?v=6JeuJRqKJrI
class TreeNode {
  constructor(val, left, right){
    this.val = val
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor(val){
    // keep track of the root by setting a new node
    this.root = new TreeNode(val);
    this.count =1; 
  }
  // let's scaffold out all our helpers methods we could use
  size(){
    return this.count
  }


  // a recursive function is one that calls on itself
  insert(val){
    this.count++
    // create a new instance if a treeNode here if you want to insert values into our amazing tree!
    let newNode = new TreeNode(val)
// searchTree is the name of the recursive function inside of insert, that will set values in our tree using left and right properties, and assuming here we already passed in a root node, when we created a new instance of our binarySearchTree class below.
    const searchTree = node => {
      // if val < node.val, go left
      if (val < node.val) {
        if(!node.left){
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      }
      // if val > node.val, go right
      else if(val > node.val){
        if (!node.right){
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }



  
  min(){
    //  finding the minimum value like this only works this way in a binry search tree because the left value will always be smaller than the on sibling on the right.
    let currentNode = this.root
    // continue traversing left untiol no more children
    while (currentNode.left){
      currentNode = currentNode.left
    }
    return currentNode.val
  }

  // same logic for finding the max value in a binary search tree, if you traverse all the way right till the end, it will be the largest value in the tree..
  max(){
    let currentNode = this.root
    while (currentNode.right){
      currentNode = currentNode.right
    }
    return currentNode.val;
  };
  
  // takes a value and checks if it exists in the tree.
  contains(myVal) {
    // set a varaible that stores the node we're currently looking at
    let currentNode = this.root
    while(currentNode){
      if (myVal === currentNode.val){
        return true
      }
      if (myVal < currentNode.val){
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false

  }

  // searching algorithms...
  // depth first search... three kinds... that search branch by branch
  // inorder, left node first, root, then right. this pattern for whole tree.
  dfsInOrder(){
    let result = []
    // let's build a nested recursive function, like insert function above. so let's make a function that takes in a node, TreeNode, like a starting point?
    const traverse = TreeNode => {
      // if left child exists, go left again
      if (TreeNode.left) traverse(TreeNode.left)
      // capture root node value
      result.push(TreeNode.val)
      // if right child exists, go right again
      if(TreeNode.right) traverse(TreeNode.right)
    }
    // need to call the recursive travers method here!!! yay!
    traverse(this.root);
    return result

  }

  // preorder, root, left, right this pattern for whole tree.
  dfsPreOrder(){
    let result = []
    // then write another recursive traveerse function to push values into the array result
    const traverse = TreeNode => {
      // capture root node value
      result.push(TreeNode.val)
      // if left child exists, go left again
      if (TreeNode.left) traverse(TreeNode.left)
      // if right child exists, go right again
      if(TreeNode.right) traverse(TreeNode.right)
    }
    traverse(this.root);
    return result;

  }


  // postorder, and the pattern here is left node, right node, root last
  dfsPostOrder(){
    let result = []
    // then write another recursive traveerse function to push values into the array result
    const traverse = TreeNode => {
      // if left child exists, go left again
      if (TreeNode.left) traverse(TreeNode.left)
      // if right child exists, go right again
      if(TreeNode.right) traverse(TreeNode.right)
      // capture root node value
      result.push(TreeNode.val)
    }
    traverse(this.root);
    return result;
    
  }

  // And the Breadth first search... which searches level by level. we use  Queue! and return values by level
  bfs(){
    let result = []
    // the queue array is like a staging area, as we travel thorugh our inputs, we don't know exactly where we are going to put it in our tree yet, cause we don't know the other values. so we stage the value in the queue and it leaves when we find values close to it in the tree.
    let queue = []
  // push root node into queue
    queue.push(this.root);
    while(queue.length){
      let currentNode = queue.shift()

      result.push(currentNode)

      // if that current node has left children??
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if (currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return result
  }

};



// finally here is how to call those functoins, you must create a variable, calling a new instance of the class, and inside this instance we call the funtions we want. so the class BinarySearchTree is the skelotn of a tree with tools/ methods in it to manipulate data, but right now its an empty shell. to put data in it to play with, you have to create an instance of the class, we called it bst here, then run those methods, the first method needs to be insert so bst has data to see and use. here, we're setting 15 as our root node. I can insert nodes/ values into it.
const bst = new BinarySearchTree(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

// console.log(bst);
// console.log(bst.size());
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.contains(2));
// console.log(bst.contains(5));
console.log(bst.dfsInOrder());


// Leetcode 100, check if two trees are the same!
class myNode {
  constructor(val, left, right){
    this.val = val
    this.left = left
    this.right = right
  }
}
class myBinaryTree {
  constructor(val){
    // keep track of the root by setting a new node
    this.root = new myNode(val);
  }
  // in order for me to even run functions inside myBinaryTree class, I need to build the tree first so mu helper fucntions have something to look at, that's why my function calls keep saying undefined, they are looking at nothing. so, every tree class must have an add function to build the tree first. 



  isSameTree(p, q) {
    // base case, run thorugh whole tree and if no if statemnts match, return this final base case of TRUE...
    if(p == null && q == null){
      console.log(true);
      return true;
    }
    if((p == null && q !== null || q == null && p !== null)){
      console.log(false);
      return false;
    }
    if(p.val !== q.val){
      console.log(false);
      return false;
    }
    // time to call the recursive nature of this function...

    // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
const myBT = new myBinaryTree(4);

console.log(myBT.isSameTree((1,2,3),(1,2,3)))

// isSame tree is undefined. I can get answers in leetcode, but when i try to wrote the whole code with two classes with constructors and then calling them by creating another object... it wont work.


// leetcode #700. Search in a Binary Search Tree, 
// recursion with helper function
var searchBST = function(root, val) {
  let res = null;
  const helper = (node) => {
      if(!node) return;
      if(node.val === val){
          res = node;
          return;
      }
      if(val < node.val) helper(node.left)
      if(val > node.val) helper(node.right)
  }
  
  helper(root);   
  return res;
};


// 589. N-ary Tree Preorder Traversal

var preorder = function(root,  ans=[]) {
  if (!root) return ans
  ans.push(root.val)
  for (let child of root.children)
      preorder(child, ans)
  return ans
  
};



// leetcode 144. Binary Tree Preorder Traversal
var preorderTraversal = function(root) {
  let result = [];
  if (!root) return result;
  const traverse = TreeNode => {
    result.push(TreeNode.val);
        // if the tree has a left node, change the TreeNode to what we're currently looking at, call traverse method again, thats recursion, and whats the first thing our traverse method does? it pushes the val. smart!!
    if (TreeNode.left) traverse(TreeNode.left);
    if (TreeNode.right) traverse(TreeNode.right);
  };
  traverse(root);
  return result;
};


// leetcode 704, binary search. assume the array is sorted and look for a target, but treat this array like a binary search tree, where you first look at the middle element as the root node, and if target is > or < than, move your pivot counter and compare again. 
var search = function(nums, target) {
  let left = 0,
      right = nums.length -1;

  while (left <= right) {
      let pivot = left + Math.trunc((right - left)/2);
      if (nums[pivot] === target) return pivot;
      
      if (nums[pivot] < target) {
          left = pivot + 1;
          }
      else {
          right = pivot - 1;
          } 
      }
  return -1;

  
};


// 104 maximum depth of binary tree, not BST!
var maxDepth = function(root){
  if (root == null){
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  // math.max returns the largest number in the given paramters, in this case, left and right variables have been keeping count of how many times they have moved down a level in our tree. 
  return Math.max(left, right) +1
}



// 222. Count Complete Tree Nodes, here is how to count how many nodes there in a binary tree in a one liner. pretty simple i guess
var countNodes = function(root) {
  return root != null ? 1 + countNodes(root.right) + countNodes(root.left) : 0;


};