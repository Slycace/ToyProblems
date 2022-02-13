/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
       let que = [root];

   while(que.length) {
     let length = que.length;
     
     for(let i = 0; i < que.length - 1; i++) {
        let currentNode = que[i];
        if(que.length > 1 ) {
          let nextNode = que[i + 1];
          currentNode.next = nextNode;
        }
     }
     console.log(que[0])
     while(length > 0) {
       let node = que.shift();
       if(node.left) que.push(node.left);
       if(node.right) que.push(node.right);
       length--;
     }
   }
    return root;
};