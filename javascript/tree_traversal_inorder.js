class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeTraversalInorder(root) {
  const queue = !root ? [] : [root]
  const result = []

  while(queue.length) {
    const node = queue[0]
    
    if (node.left && !node.seen) {
      queue.unshift(node.left);
      node.seen = true;
      continue;
    }

    delete node.seen
    result.push(node.value)
    queue.shift()

    if (node.right) {
      queue.unshift(node.right)
    }

  }
  return result;
  // if (root === null) {
  //   return [];
  // }

  // const leftQueue = root.left ? [root.left] : [];
  // const left = [];

  // while(leftQueue.length) {
  //   const node = leftQueue.shift()
  //   if (node.left) {
  //     leftQueue.push(node.left)
  //   }
    
  //   if (node.right) {
  //     leftQueue.push(node.right)
  //   }
    
  //   if (node.value >= left[left.length - 1] || left.length === 0) {
  //     left.push(node.value)
  //     continue;
  //   }

  //   if (node.value < left[0]) {
  //     left.unshift(node.value)
  //     continue;
  //   }

  //   if (node.value < left[left.length - 1]) {
  //     left.splice(left.length-1, 0, node.value)
  //     continue;
  //   }

    
  // }

  // const rightQueue = root.right ? [root.right] : [];
  // const right = [];

  // while(rightQueue.length) {
  //   const node = rightQueue.shift()
    
  //   if (node.left) {
  //     rightQueue.push(node.left)
  //   }

  //   if (node.right) {
  //     rightQueue.push(node.right)
  //   }

  //   if (node.value >= right[right.length - 1] ||  right.length === 0) {

  //     right.push(node.value)
  //     continue;
  //   }

  //   if (node.value < right[0]) {
  //     right.unshift(node.value)
  //     continue;
  //   }

  //   if (node.value < right[right.length - 1]) {
  //     right.splice(right.length-1, 0, node.value)
  //     continue;
  //   }

  // }

  // return [...left, root.value, ...right]
}

if (require.main === module) {
  // add your own tests in here
  // let root = new Node(2, new Node(-10), new Node(20));
  // console.log("Expecting: [-10, 2, 20]");
  // console.log(treeTraversalInorder(root));

  // console.log("");

  // root = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));
  // console.log("Expecting: [0, 5, 10, 20, 30] ");
  // console.log(treeTraversalInorder(root));

  // console.log("");

  root = new Node(30, new Node(10, null, new Node(20, null, new Node(25, new Node(24)))), new Node(50, new Node(40, new Node(39)), new Node(55, new Node(54), new Node(56, null, new Node(60)))))

  console.log ("Expecting: [10, 20, 24, 25, 30, 39, 40, 50, 54, 55, 56, 60]")
  console.log(treeTraversalInorder(root));

  // console.log("");

  // const rootTwo = new Node(10, new Node(9, new Node(8, new Node(7, new Node(6, new Node(5))))));
  // console.log("Expecting: [5, 6, 7, 8, 9, 10]")
  // console.log(treeTraversalInorder(rootTwo));
}

module.exports = {
  Node,
  treeTraversalInorder
};

// Please add your pseudocode to this file
// And a written explanation of your solution
