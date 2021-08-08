// imports go here
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// import javax.swing.tree.TreeNode;



public class Algos {

  // create methods here, call them in AlgosTester
  // 1.
  public void allNumbers(){
    for (int i=0; i <= 255; i++){
        System.out.println(i);
    }
  }

  // 2.
// 94. Binary Tree Inorder Traversal. there are 1.in-order, 2.pre-order or 3.post-order which refer to the order the root node is traversed. the one below is inorder, yay! arrays like linked lists and linear data structures are read one way, in one direction, but trees can be read mulitple ways. depth-first or breadth first. there are three common ways to read in depth-first, as stated above. traversing a tree means iterating througout all nodes in some manner. 

// if you're going to work with binary trees, you need to define a class elsewhere that establishes variables to use in your method, I created a file called TreeNode.java and define them there. no need to import, both these files are under the folder Algorithms 2021.
  public List<Integer> inorderTraversal(TreeNode root, int val) {

    // first you have to create a new stack to store a visited node for later. 
    Stack<TreeNode> stack = new Stack<>();
    List<Integer> output_arr = new ArrayList<>();
      
    // so next you want to check even if there is a node in the root of the tree..
    if(root == null) {
      return output_arr;
    }
// set current node equal to root.
    TreeNode current = root;

    // so while the current root is not equal to null OR the stack is not empty, 
    while (current != null || !stack.isEmpty()) {
      while (current != null ) {
        stack.push(current);
        // left traversal
        current = current.left;
      }
      current = stack.pop();
      // root node
      output_arr.add(current.val);
      // right traversal
      current = current.right;
    }
    return output_arr;
  }


}




  

