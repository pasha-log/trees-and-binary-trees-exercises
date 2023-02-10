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

	sumValues() {
		const toAddQueue = [ this ];
		let count = 0;
		while (toAddQueue.length) {
			const current = toAddQueue.shift().root;
			if (current) {
				if (current.val) {
					count += current.val;
				}
				const checkForChildrenAndAdd = (children) => {
					children.forEach((child) => {
						count += child.val;
						if (child.children) {
							checkForChildrenAndAdd(child.children);
						}
					});
				};
				checkForChildrenAndAdd(current.children);
			} else {
				return 0;
			}
		}
		return count;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		const toAddQueue = [ this ];
		let count = 0;
		while (toAddQueue.length) {
			const current = toAddQueue.shift().root;
			if (current) {
				if (current.val % 2 === 0) {
					count++;
				}
				const checkForChildrenAndAdd = (children) => {
					children.forEach((child) => {
						if (child.val % 2 === 0) {
							count++;
						}
						if (child.children) {
							checkForChildrenAndAdd(child.children);
						}
					});
				};
				checkForChildrenAndAdd(current.children);
			} else {
				return 0;
			}
		}
		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		const toAddQueue = [ this ];
		let count = 0;
		while (toAddQueue.length) {
			const current = toAddQueue.shift().root;
			if (current) {
				if (current.val > lowerBound) {
					count++;
				}
				const checkForChildrenAndAdd = (children) => {
					children.forEach((child) => {
						if (child.val > lowerBound) {
							count++;
						}
						if (child.children) {
							checkForChildrenAndAdd(child.children);
						}
					});
				};
				checkForChildrenAndAdd(current.children);
			} else {
				return 0;
			}
		}
		return count;
	}
}

module.exports = { Tree, TreeNode };
