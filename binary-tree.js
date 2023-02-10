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

	// https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/
	minDepth() {
		const root = this.root;
		const minimumDepth = (root) => {
			if (!root) return 0;

			// Base case : Leaf Node. This accounts for height = 1.
			if (!root.left && !root.right) return 1;

			// If left subtree is NULL, recur for right subtree
			if (!root.left) return minimumDepth(root.right) + 1;

			// If right subtree is NULL, recur for left subtree
			if (!root.right) return minimumDepth(root.left) + 1;

			return Math.min(minimumDepth(root.left), minimumDepth(root.right)) + 1;
		};
		return minimumDepth(root);
	}
	// https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/

	/** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

	// https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/
	maxDepth() {
		const root = this.root;
		const maximumDepth = (root, level) => {
			if (!root) return level;
			level++;

			return Math.max(maximumDepth(root.left, level), maximumDepth(root.right, level));
		};
		return maximumDepth(root, 0);
	}
	// https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		let result = 0;
		const maxSumHelper = (node) => {
			if (!node) return 0;
			const leftSum = maxSumHelper(node.left);
			const rightSum = maxSumHelper(node.right);
			result = Math.max(result, node.val + leftSum + rightSum);
			return Math.max(0, leftSum + node.val, rightSum + node.val);
		};
		maxSumHelper(this.root);
		return result;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
		const root = this.root;
		let values = [];
		const nextLargerHelper = (root) => {
			if (!root) return null;

			if (root.val > lowerBound) values.push(root.val);

			nextLargerHelper(root.left);
			nextLargerHelper(root.right);
		};
		if (!root) return null;
		if (root.val === lowerBound) return null;
		nextLargerHelper(root);
		return Math.min(...values);
	}

	/** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
