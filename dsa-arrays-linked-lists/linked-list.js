/** Node: node for a singly linked list. 
 * 
 * -"Singly" refers to a type of linked list where each node has only one reference to the next node in the list. 
 * -In a singly linked list, each node contains a value and a pointer or reference to the next node in the list, but not to the previous node. 
 * -The last node in the list points to a null reference to indicate the end of the list.
 * -They can be used to represent sequences of data that can be easily modified by adding or removing elements at the beginning or end of the list.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null; // head manages LinkedList
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);

		// check if list is empty
		if (!this.head) {
			this.head = newNode; // if list is empty, set head and tail to the new node
			this.tail = newNode;
		} else {
			this.tail.next = newNode; // if list is not empty, set next tail node to point to new node
			this.tail = newNode; // and set tail property of the list to point to the new node
		}
		this.length++; // increment length property of the list to reflect the addition of the new node
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);

		// check if list is empty
		if (!this.head) {
			this.head = newNode; // if list is empty, set head and tail to the new node
			this.tail = newNode;
		} else {
			newNode.next = this.head; // if the list is not empty, set next property of new node to point to current head node
			this.head = newNode; // and set head property of the list to point to the new node
		}
		this.length++; // increment length property of the list to reflect the addition of the new node
	}

	/** pop(): return & remove last item. */

	pop() {
		// check if list is empty, if it is return null
		if (!this.head) return null;

		// initialize to null to check if list is empty
		let removedNode = null;

		// if the list has 1 node, remove the node by setting head and tail to null
		if (this.length === 1) {
			removedNode = this.head;
			this.head = null;
			this.tail = null;
		} else {
			let currNode = this.head;
			// while loop checks next property of currNode, iterates over list starting at head and stops at second to last node
			while (currNode.next !== this.tail) {
				currNode = currNode.next;
			}
			// remove last node by setting next property of the second to last node to null
			removedNode = this.tail;
			currNode.next = null;
			this.tail = currNode; //sets tail of the list to point to the second to last node
		}
		this.length--; // decrement the length of the list to reflect the removal of the node
		return removedNode.val; // return the value of the removed node
	}

	/** shift(): return & remove first item. */

	shift() {
		// check if list is empty, if it is return null
		if (!this.head) return null;

		// assign head to the removedNode
		const removedNode = this.head;

		// if the list has 1 node, set head and tail to null
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			// else the list has more than one node, remove the head node, update the head and point to the second node in the list
			this.head = this.head.next;
		}
		this.length--; // decrement the length of the list to reflect the removal of the node
		return removedNode.val; // return the value of the removed node
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		let currNode = this.head; // initialize head node
		let currIdx = 0; // start at index 0

		// while loop continues as long as currNode is not null, allows us to traverse the list until the end
		while (currNode) {
			if (currIdx === idx) return currNode.val; // if currIdx equals idx, return value of currNode

			// if currIdx is not equal to idx, set currNode to next node in list and increment
			currNode = currNode.next;
			currIdx++;
		}
		return null;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let currNode = this.head; // initialize head node
		let currIdx = 0; // start at index 0

		// while loop continues as long as currNode is not null, allows us to traverse the list until the end
		while (currNode) {
			// if currIdx equals idx, set val of currNode to val, and return true
			if (currIdx === idx) {
				currNode.val = val;
				return true;
			}
			// if currIdx is not equal to idx, set currNode to next node in list and increment
			currNode = currNode.next;
			currIdx++;
		}
		return false;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		// if idx is <0 or >length of list, return false
		if (idx < 0 || idx > this.length) return false;

		// check if idx is 0, if it is, add new node to beginning of list
		if (idx === 0) {
			this.unshift(val);
			return true;

			// check if idx equals length of list, if it is, add new node to end of list and return true
		} else if (idx === this.length) {
			this.push(val);
			return true;

			// if idx is not 0 or length of list, create new node with val
		} else {
			const newNode = new Node(val);

			// currNode traverses the list and currIdx keeps track of current idx as we traverse the list
			let currNode = this.head;
			let currIdx = 0; // start at idx 0

			// while loop that continues until we reach the node that comes before the idx where we want to insert the new node
			while (currIdx < idx - 1) {
				currNode = currNode.next;
				currIdx++;
			}

			newNode.next = currNode.next;
			currNode.next = newNode;
			this.length++; // increment list to reflect the addition of the new node
			return true; // return true to indicate that the new node has been inserted at given idx
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		// check if idx out of range by checking if idx is <0 or >=length of list, returns null since we can't remove node out of range
		if (idx < 0 || idx >= this.length) return null;

		// initialize to null and update later
		let removedNode = null;

		// if given idx is 0, remove head node from list
		if (idx === 0) {
			removedNode = this.head; // set to current head node, updates head property of list to point to next node
			this.head = this.head.next;
			if (!this.head) this.tail = null; // check if head of list is null or not. If head is null, there are no nodes in list

			// if idx is not 0, find node that comes before the idx where we want to remove the node
		} else {
			let currNode = this.head;
			let currIdx = 0;
			while (currIdx < idx - 1) {
				currNode = currNode.next;
				currIdx++;
			} // set removedNode to node that comes after idx, updates next property of the node that comes before the idx to skip over the removed node
			removedNode = currNode.next;
			currNode.next = currNode.next.next;
			if (!currNode.next) this.tail = currNode; // updates the tail property of the list
		}

		this.length--; // decrements the length of the list to reflect the removal of the node
		return removedNode.val; // returns the value of the removed node
	}

	/** average(): return an average of all values in the list */

	average() {
		// check if head is null, if it is, return 0 since the avg of empty list is 0
		if (!this.head) return 0;

		// initialize variables to 0 to start with base value
		let sum = 0;
		let count = 0;
		let currNode = this.head;

		// while loop continues until currNode is null. This allows us to traverse the list and add up the values of all nodes in the list
		while (currNode) {
			sum += currNode.val;
			count++;
			currNode = currNode.next;
		}

		// calculate the avg of all values in the list by dividing the sum of all values by the number of nodes in the list, return the result
		return +(sum / count).toFixed(4);
	}
}

module.exports = LinkedList;
