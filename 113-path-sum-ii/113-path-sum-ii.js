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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const allPaths = [];
        
    pathSumRecursive(root, targetSum, allPaths, [])
    
    return allPaths;
    
};

function pathSumRecursive(currentNode, targetSum, allPaths, currentPath) {
    if(currentNode === null) return;
    
    currentPath.push(currentNode.val);
    
    const newPath = currentPath.slice()
    
    if(targetSum === currentNode.val && currentNode.left === null && currentNode.right === null) {
        //console.log(allPaths,'testing all apths')
        allPaths.push(newPath);
    }

    
    pathSumRecursive(currentNode.left, targetSum - currentNode.val, allPaths, currentPath);
    pathSumRecursive(currentNode.right, targetSum - currentNode.val, allPaths, currentPath);
 

    currentPath.pop();
    
    
    
}