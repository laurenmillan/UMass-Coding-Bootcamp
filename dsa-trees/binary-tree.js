/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

	minDepth(node = this.root) {
		if (!node) return 0; // return 0 if node is null
		if (!node.left && !node.right) return 1; // return 1 if node has no left and right children
		if (!node.left) return this.minDepth(node.right) + 1; // call minDepth for right child and add 1 to res if node has no left child
		if (!node.right) return this.minDepth(node.left) + 1; // call minDepth for left child and add 1 to res if node has no right child

		// call minDepth and add 1 to res if node has both left and right children
		return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

	maxDepth(node = this.root) {
		if (!node) return 0;

		// calculate max depth by adding 1 to max of depths of left and right
		return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		let result = 0;

		function sumsHelper(node) {
			if (node === null) return 0;
			const leftSum = sumsHelper(node.left);
			const rightSum = sumsHelper(node.right);
			result = Math.max(result, node.val + leftSum + rightSum);
			return Math.max(0, leftSum + node.val, rightSum + node.val);
		}
		sumsHelper(this.root);
		return result;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound, node = this.root) {
		if (!node) return null;
		const leftLarger = this.nextLarger(lowerBound, node.left);
		const rightLarger = this.nextLarger(lowerBound, node.right);
		const candidates = [ leftLarger, rightLarger ].filter((val) => val !== null);
		if (node.val > lowerBound) candidates.push(node.val);
		candidates.sort((a, b) => a - b);
		return candidates.length > 0 ? candidates[0] : null;
	}

	/** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

	//areCousins(node1, node2) {}

	/** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

	//static serialize() {}

	/** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	//static deserialize() {}

	/** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

	//lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
