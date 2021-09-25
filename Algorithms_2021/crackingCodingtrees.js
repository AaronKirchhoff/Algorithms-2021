// cracking the coding interview, 4.2 Minimal tree in JS
class TreeNode {
  constructor(val, left, right){
    this.val = val
    this.left = left
    this.right = right
  }
}

export function minimalHeightBST(arr) {
  if (!arr || !arr.length) return null;
  return createMinimalHeightBST(arr, 0, arr.length - 1);
}

function createMinimalHeightBST(arr, start, end) {
  if (start > end) return null;

  const middleIndex = Math.ceil((start + end) / 2),
        rootNode = new TreeNode(arr[middleIndex]);

  rootNode.left = createMinimalHeightBST(arr, start, middleIndex - 1);
  rootNode.right = createMinimalHeightBST(arr, middleIndex + 1, end);

  return rootNode;
}

var BST = new BinarySearchTree();
var sortedUniqueArr = [0, 1, 2, 3, 4, 5, 6];

BST.createMinHeightBST(sortedUniqueArr);
console.log(BST);
// had to give up on this one, couldnt find enough good documentation to make sense out of this