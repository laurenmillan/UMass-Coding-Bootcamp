/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		const newNode = new Node(val);

		// check if queue is empty
		if (!this.first) {
			this.first = newNode; // if queue is empty, set first and last to the new node
			this.last = newNode;
		} else {
			this.last.next = newNode; // if queue is not empty, set next last node to point to new node
			this.last = newNode; // and set last property of the queue to point to the new node
		}
		this.size++; // increment size property of the queue to reflect the addition of the new node
	}

	/** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		// check if queue is empty, throw Error
		if (!this.first) {
			throw new Error('Queue is empty');
		}

		// assign first to the removedNode
		const removedNode = this.first;

		// check if first and last nodes of queue are the same, which indicates there's only one node in queue and set last to null
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next; //update first to point to second node in queue, removing the first node
		this.size--; // decrement the size of the queue to reflect the removal of the node

		return removedNode.val; // return the value of the removed node
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		if (!this.first) {
			throw new Error('Queue is empty');
		}
		return this.first.val;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Queue;
