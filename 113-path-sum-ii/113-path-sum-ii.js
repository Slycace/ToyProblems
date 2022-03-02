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
    const paths = [];
    
    getPaths(root, targetSum, paths, [])
    
    
    return paths;
};

function getPaths(current, targetSum, paths, currentPath) {
    if(current === null) return;
    
    currentPath.push(current.val);
    
    if(current.val === targetSum && current.left === null && current.right === null) {
        paths.push([...currentPath]);
    } else {
        getPaths(current.left, targetSum - current.val, paths, currentPath);
        getPaths(current.right, targetSum - current.val, paths, currentPath);
    }
    
    currentPath.pop();
    
}