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
  // A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.
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
// 9/9/21 binary search tree starter... only for trees wher the left nodes are smaller than the ones onf the right. following code won't work for plain binary tree.
// 1. define a binary tree node, every node has three properties... and a constructor method to create an instance or object of the class TreeNode

// folowing this video, im at 8:29 https://www.youtube.com/watch?v=6JeuJRqKJrI
class TreeNode {
  constructor(val, left, right){
    this.val = val
    this.left = left
    this.right = right
  }
}
// 2. inorder traversal
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
  // a recursive function si one that calls on itself?
  insert(val){
    this.count++

    let newNode = new TreeNode(val)
// searchTre is the name of the recursive function inside of insert
    const searchTree = TreeNode => {
      // if val < TreeNode.val, go left
      if (val < TreeNode.val) {
        if(!TreeNode.left){
          TreeNode.left = newNode
        } else {
          searchTree(TreeNode.left)
        }
      }
      // if val > TreeNode.val, go right
      else if(val > TreeNode.val){
        if (!TreeNode.right){
          TreeNode.right = newNode
        } else {
          searchTree(TreeNode.right)
        }
      }
    }
    searchTree(this.root)


  }
  
  min(){

  }

  max(){

  }
  
  contains() {

  }

  // searching algorithms...
  // depth first search... three kinds...
  // inorder
  dfsInOrder(){

  }

  // preorder
  dfsPreOrder(){

  }


  // postorder
  dfsPostOrder(){
    
  }

  // And the Breadth first search...
  bfs(){

  }


};

// finally here is how to call those functoins, you must create a variable, calling a new instance of the class, and inside this instance we call the funtions we want.
const bst = new BinarySearchTree(15)

bst.insert(34)
bst.insert(2)
bst.insert(6)
console.log(bst)


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
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
const myBT = new myBinaryTree(6);

myBT.isSameTree([1,2,3],[1,2,3]);

// isSame tree is undefined. I can get answers in leetcode, but when i try to wrote the whole code with two classes with constructors and then calling them by creating another object... it wont work.