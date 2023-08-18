// Data Structures: Linked Lists
// Start: 8/17/23, Midnight


/**
 * Class for constructing Linked Lists
 */
class LinkedList {
	/**
	 * Create list optionally with values already inside
	 * @param {Array} [values = []] - Array of values to put inside list
	 * (optional)
	 */
	constructor(values = []) {
		if (values === undefined || values.length === 0) {
			this.head = null;
			this.tail = null;
			this.size = 0;
		} else {
			values.forEach((value) => {
				this.append(value);
			});
		}
	}

	/**
	 * Append `value` to end of list
	 * @param {any} value - Value to add
	 */
	append = (value) => {
		// If theres no previous items in list -- Add to front
		if (this.head === null) {
			this.head = new Node(value);
			this.tail = this.head;
		} else { // Else add to back
			const node = new Node(value); // Create `Node` from `value`
			this.tail.next = node;
			this.tail = this.tail.next;
		}
		this.size++; // Increment size
	};

	/**
	 * Prepend `value` to front of list
	 * @param {any} value - Value to prepend
	 */
	prepend = (value) => {
		const node = new Node(value);

		// If theres no head yet
		if (this.head === null) {
			this.head = node;
		} else { // Else, add previous head behind new node and new node to head
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	};

	/**
	 * Search for the `Node` at the given `index`
	 * @param {Number} index - Index of the node you are trying to get
	 * @return {Node | Object} `Node` Object 'at' index...
	 */
	at = (index) => {
		if (index === 0) return this.head; // if index is 0, return head
		else if (index >= this.size) return this.tail; // If index > length

		let node = this.head.next; // Set var for next item
		if (index === 1) return node;

		for (let i = 2; i <= index; i++) {
			/* Loop through nodes using previous `node` var
			to get the next node */
			node = node.next;
		}
		return node; // Return `node` after looping
	};

	/**
	 * Remove last element of list
	 * @return {Object} New tail
	 */
	pop = () => {
		const newTail = this.at(this.size - 2);
		newTail.next = null;
		this.tail = newTail;
		this.size--;
		return this.tail;
	};
}

// Node Class
/**
 * Class for individual `Node`'s/Values in the `LinkedList`
 */
class Node {
	/**
	 * This will be the value of the Node.
	 * Equivelant to a value in an Array.
	 * @param {any} value - Value of the Node
	 */
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}


// Tests
const list = new LinkedList();
list.append([1, 2, 3]); // 1
list.append('hello'); // 2
list.append('test'); // 3
list.prepend('new head'); // 0
list.append('test2'); // 4
list.append('Find me'); // 5
list.append(['T', 'e', 's', 't', 3]); // 6
list.append('Delete me');
list.pop(); // Delete 7 ^^
console.log(list.at(5));
