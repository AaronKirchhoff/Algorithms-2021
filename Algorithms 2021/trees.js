// leetcode, 938. Range Sum of BST, traverse a Binary Search Tree, and given two out of bounds values, add all the node value in between and equal to the out of bounds intigers and return the running sum of those values.

// here to establish what val, and left and right nodes are, we have to create a class called TreeNode. we even added some error checking if root or values are null.
// create classes to create the binary search tree, you have a node class to represent the nodes in the tree with three data properties, val, left and right.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


var rangeSumBST = function(root, low, high) {
  // 1. declare empty sum variable...
  let sum =0;
    // https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846
    // now we need to search the whole tree, checking every node to see if it is between our given out-of-bounds integers... but how should we do this? there are multiple ways to search a tree.
    // there are two categories for searching a tree... 
    // Breadth-First Search-- where you start at the root, and then check each depth across the tree before going deeper, like floors in a building... the root being the top floor, then check all the rooms on the 19th floor, the all rooms on 18th floor, and so on...
    //  Depth-First Search-- finds the bottom of the tree first and flows upward, always trying to return the lowest node, but there are three common DFS... inorder traversal, preorder traversal, postorder traversal.
    // a.inorder traversal-- go to the left node from root, travel all the way down as far as you can
    // b. preorder traversal-- return root first, then go left and return nodes as you go, recursive
    // c. postorder traversal-- Where we visit the left subtree and the right subtree before visiting the current node in recursion

    // lets do DFS, Depth first search, and only add to our current sum if the value is between the range given.

    // and we need a helper fucntion recursion, what???
  function helperdfs(node){
    if (!node){
      return;
    }
    if (node.val >= low && node.val <= high){
      sum += node.val;
    }
    if(low < node.val){
      helperdfs(node.left)
    }
    if( high > node.val){
      helperdfs(node.right)
    }
  }
  // we created that helper function so we need to call it...
  helperdfs(root);
  console.log(sum);
  return sum;
};
rangeSumBST(root = [10,5,15,3,7,null,18], low = 7, high = 15);
// I dont understand what exactly the calsses are, and why they are important and how to use them? im not getting a sum here. its like the function doesn't recognize the right, left and val from the TreeNode? how to connect them?