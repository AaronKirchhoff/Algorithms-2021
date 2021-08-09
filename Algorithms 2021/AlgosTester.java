import java.util.Arrays;



public class AlgosTester {

  public static void main(String[] args) {
    // main method is the entry point for classes

    // 1. print 1- 255, call the class here and create new instance of the class with name Test
    Algos Test = new Algos();
    // call the function here 
    // 1.
      // Test.allNumbers();


      // 2.
      TreeNode root = new TreeNode(5);
      // System.out.println("Binary Tree Example");
      // System.out.println("Building tree with root value " + root.val);
      Test.inorderTraversal(root, 2);
      // Test.inorderTraversal(root, 4);
      // Test.insert(root, 8);
      // tree.insert(root, 6);
      // tree.insert(root, 7);
      // tree.insert(root, 3);
      // tree.insert(root, 9);
      // System.out.println("Traversing tree in order");
      // Test.inorderTraversal(root);


      // 3.
      // int nums[] = new int[] {8, 2, 8, 4, 9, 7};
      // int val = 8;
      // int myResult= Test.removeElement(nums, val);
      // System.out.println(myResult);
      // myResult = 4


      // 4
      // next, change the arugment from array to just an int, and convert it to an arrayList.
      // int[] x = new int[] {1,2,3,4};
      int x = 1234;
      // int myReverse= Test.reverse(x);
      // System.out.println(Arrays.toString(Test.reverse(x)));
        Test.reverse(x);
                  
                
    }

  
}
