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
list.append([1, 2, 3]);
list.prepend('new head');
list.append('hello');
console.log(list);
