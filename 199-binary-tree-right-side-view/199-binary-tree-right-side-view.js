/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
      result = [];
  
  let que = [root];

  while(que.length) {
    let length = que.length;

    result.push(que[length-1].val);

    while(length > 0) {
      let node = que.shift();
      
      if(node.left) que.push(node.left);
      if(node.right) que.push(node.right);

      length--;
    }
  }
  console.log(result,'testing')
  return result;
};