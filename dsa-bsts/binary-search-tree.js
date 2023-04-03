class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		let newNode = new Node(val);

		// if root is empty, set new node as the root and return the BST
		if (this.root == null) {
			this.root = newNode;
		}
		let currentNode = this.root;

		// check current node's value, comparing current node's value to right and left
		while (currentNode.val !== val) {
			currentNode =
				currentNode.val < val
					? currentNode.right === null ? (currentNode.right = newNode) : currentNode.right
					: currentNode.left === null ? (currentNode.left = newNode) : currentNode.left;
		}

		return this;
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}
		this.insertRecursiveHelper(this.root, val);
		return this;
	}
	insertRecursiveHelper(node, val) {
		if (val < node.val) {
			if (node.left === null) {
				node.left = new Node(val);
			} else {
				this.insertRecursiveHelper(node.left, val);
			}
		} else if (val > node.val) {
			if (node.right === null) {
				node.right = new Node(val);
			} else {
				this.insertRecursiveHelper(node.right, val);
			}
		}
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let currentNode = this.root;
		while (currentNode !== null) {
			if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else if (val > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				return currentNode;
			}
		}
		return undefined;
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, node = this.root) {
		if (node == null) return;
		if (node.val == val) return node;
		if (node.val > val) {
			return this.findRecursively(val, node.left);
		} else {
			return this.findRecursively(val, node.right);
		}
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder() {
		const result = [];
		this.dfsPreOrderHelper(this.root, result);
		return result;
	}

	dfsPreOrderHelper(node, result) {
		if (node === null) return;
		result.push(node.val);
		this.dfsPreOrderHelper(node.left, result);
		this.dfsPreOrderHelper(node.right, result);
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder() {
		const result = [];
		this.dfsInOrderHelper(this.root, result);
		return result;
	}

	dfsInOrderHelper(node, result) {
		if (node === null) return;
		this.dfsInOrderHelper(node.left, result);
		result.push(node.val);
		this.dfsInOrderHelper(node.right, result);
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder() {
		const result = [];
		this.dfsPostOrderHelper(this.root, result);
		return result;
	}

	dfsPostOrderHelper(node, result) {
		if (node === null) return;
		this.dfsPostOrderHelper(node.left, result);
		this.dfsPostOrderHelper(node.right, result);
		result.push(node.val);
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
		const result = [];
		const queue = [];

		if (this.root !== null) {
			queue.push(this.root);
		}

		while (queue.length > 0) {
			const currentNode = queue.shift();
			result.push(currentNode.val);

			if (currentNode.left !== null) {
				queue.push(currentNode.left);
			}
			if (currentNode.right !== null) {
				queue.push(currentNode.right);
			}
		}

		return result;
	}

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	//remove(val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	//isBalanced() {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	//findSecondHighest() {}
}

module.exports = BinarySearchTree;
