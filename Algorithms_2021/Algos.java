// imports go here
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import java.util.Arrays;
import java.lang.StringBuilder;

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


// 3. remove element, leetocode #27
// so run through an array of integers, and given another int val, remove the target int from the array and return how many indecies are left. must do this inplace, not creating another array but instead changing the existing array nums as I go. pop() method removes elements from end of array, you can also push() or shift(), (delete from beginning of array) byt to remove from middle, splice(index to be removed, how many from there to remove) method. sorry that's all javascript methods. i need java. try remove(). cannot use remove with int[]. so maybe we can shift val to end of array, you dont need to remove them.

// so with this solution we have two points, i and j. with every loop we ask if j is equal to val? if not, go ahead an change num[i] to be equal to num[j] and increment i++. we are essesntially comparing each index to val and shifting them by one, in the end you are left with any Vals in the end of your array.
  public int removeElement(int[] nums, int val) {
    int i = 0;
    for (int j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
            // System.out.println(Arrays.toString(nums));
        }
    }
    System.out.println(Arrays.toString(nums));
    return i;
  }

  // answer needs to be a single integer = to how many indexes are left 
  // [2, 4, 9, 7, 9, 7]
  // 4
  // this output means eventually you get to a point in the array where j is equal to val, and you change it to whatever i is. the question doesn't care what that is, so long as Val is no longer in the array. intersting. and you return i because i++ is basically counting how many indecies are not equal to val. smart!

// 4
//  iwant to pass in an integer, then my output is the int reversed. 3456 = 6543. my first thought is to convert the integer and break it up to an array. then you can maybe pull in descending order i-- and create a new array?? let try to pass in an array first. must use arrayList, not array. 
// Spent hours on this, got a return of a reverse array but could NOT figure out how to convert an array back to an int. so I gave up. the following is a walkthorugh I found.
  public int reverse(int x) {
    // create an empty int that will be the reverse answer
    int finalInt = 0;
    int pop;

    while( x != 0){
      // set pop equal to x percent of 10, meaning x divided by ten and take the remainder of that. modulus?
      //  fo example... 2345 / 10 = 234.5
      pop = x % 10;
      // x divided by ten
      x /= 10;
      // check to make sure answer is in leetcode boundaries
      if (finalInt > Integer.MAX_VALUE/10 || finalInt == Integer.MAX_VALUE/10 && pop > 7) return 0;

      if (finalInt < Integer.MIN_VALUE/10 || finalInt == Integer.MIN_VALUE/10 && pop < -8) return 0;
      // by modulus operator by ten, your remainder is the last digit, set it equal to pop and add it to finalInt, then multiply back up by ten so you don't have a decimal. divide x by ten to get the next number to modulus operate for remainder and last digit. 
      finalInt = (finalInt * 10) + pop;
    }
    System.out.println(finalInt);
    return finalInt;
          
  }

}




  

