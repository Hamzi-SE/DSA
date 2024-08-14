const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    right: {
      value: 6,
    },
  },
}

//      1
//    /   \
//   2     3
//  / \     \
// 4   5     6

// function breadthFirstTraversal(root) {
//   if (!root) return

//   const queue = []
//   queue.push(root)

//   while (queue.length > 0) {
//     const nodeValue = queue.shift() // shift removes the first element from array and return the removed element (modifies the original array)
//     console.log(nodeValue.value)

//     if (nodeValue.left) {
//       queue.push(nodeValue.left)
//     }

//     if (nodeValue.right) {
//       queue.push(nodeValue.right)
//     }
//   }
// }

// breadthFirstTraversal(tree) // Output: 1 2 3 4 5 6

// function postOrderTraversal(node) {
//   if (node === undefined) return

//   console.log(node.value)  // pre-order

//   // First, visit the left subtree
//   postOrderTraversal(node.left)

//   console.log(node.value)  // in-order

//   // Then, visit the right subtree
//   postOrderTraversal(node.right)

//   // Finally, visit the root (current node)
//   console.log(node.value)  // post-order
// }

// postOrderTraversal(tree)    // Output: 4 5 2 6 3 1

// function reverseLevelOrderTraversal(root) {
//   if (!root) return

//   const queue = [root]
//   const result = []

//   // Level-order traversal
//   while (queue.length > 0) {
//     const currentNode = queue.shift()
//     result.push(currentNode.value)

//     // Enqueue left and right children
//     if (currentNode.left) queue.push(currentNode.left)
//     if (currentNode.right) queue.push(currentNode.right)
//   }

//   // Print result in reverse order
//   for (let i = result.length - 1; i >= 0; i--) {
//     console.log(result[i])
//   }
// }

// reverseLevelOrderTraversal(tree) // Output: 6 5 4 3 2 1

// function reverseLevelOrderTraversal(root) {
//   if (root === undefined) return

//   const queue = [root]
//   const result = []

//   while (queue.length > 0) {
//     const levelSize = queue.length
//     const levelNodes = []

//     for (let i = 0; i < levelSize; i++) {
//       const currentNode = queue.shift()
//       levelNodes.push(currentNode.value)

//       if (currentNode.left) queue.push(currentNode.left)
//       if (currentNode.right) queue.push(currentNode.right)
//     }

//     result.unshift(levelNodes)
//   }

//   console.log(result.flat())
// }

// reverseLevelOrderTraversal(tree)    // Output: [4, 5, 6, 2, 3, 1]
