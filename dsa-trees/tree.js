/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues(node = this.root) {
		if (!node) return 0; // check if node is null

		let sum = node.val; // initialize sum to the value of the current node
		for (const child of node.children) {
			sum += this.sumValues(child); // calls sumValues function and adds the result to the sum variable
		}

		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens(node = this.root) {
		if (!node) return 0;

		// initialize count with a value of 1 if the current node's value is even, or 0 otherwise
		// this initializes the count of even-valued nodes for this node's subtree
		let count = node.val % 2 === 0 ? 1 : 0;
		for (const child of node.children) {
			count += this.countEvens(child);
		}

		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound, node = this.root) {
		if (!node) return 0;

		// initializes count with a value of 1 if the current node's value is >lowerBound, or 0 otherwise
		// this initializes the count of nodes with values >lower bound for this node's subtree
		let count = node.val > lowerBound ? 1 : 0;
		for (const child of node.children) {
			count += this.numGreater(lowerBound, child);
		}

		return count;
	}
}

module.exports = { Tree, TreeNode };
