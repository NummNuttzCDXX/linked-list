// Data Structures: Linked Lists
// Start: 8/17/23, Midnight

const isEqual = require('lodash.isequal');

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

	/**
	 * Check if list contains `value`
	 * @param {any} value - Value to search for
	 * @return {boolean}
	 */
	contains = (value) => {
		if (this.head.value == value) return true;

		let node = this.head.next;
		for (let i = 1; i < this.size; i++) {
			// If both are Objects, check if equal
			if (node.value instanceof Object && value instanceof Object) {
				if (isEqual(node.value, value)) return true;
			}

			if (node.value == value) {
				return true;
			} else {
				node = node.next;
			}
		}

		// After loop if value is not found
		return false;
	};

	/**
	 * Find the index of the given value
	 * @param {any} value - Value whos index you want to find
	 * @return {number | null} Index number or null if not found
	 */
	find = (value) => {
		if (value == this.head.value) return 0; // Check head

		let node = this.head.next; // Save next
		// Loop through nodes
		for (let index = 1; index < this.size; index++) {
			// If both are objects, check if node and value are equal
			if (node.value instanceof Object && value instanceof Object) {
				if (isEqual(node.value, value)) return index;
			}

			if (node.value == value) return index; // Check next

			else node = node.next; // Else, loop to next node
		}

		return null; // If not found, return null
	};

	/**
	 * Turn list values into a string
	 * @return {string} String of all values
	 */
	toString = () => {
		let string = `( ${JSON.stringify(this.head.value)} ) `;

		let node = this.head.next;
		for (let i = 1; i <= this.size; i++) {
			if (node === null) {
				string += `-> null`;
				break;
			}

			string += `-> ( ${JSON.stringify(node.value)} ) `;
			node = node.next;
		}

		return string;
	};

	/**
	 * Insert a value at the specified index
	 * @param {any} value - Value to insert
	 * @param {number} index - Index of list to insert at
	 *
	 * @return {Object} Newly created `Node`
	 */
	insertAt = (value, index) => {
		const node = new Node(value); // Create new Node

		// Old node at `index` needs to be connected to new node
		node.next = this.at(index);

		// New node needs to be connected to Node at previous index
		this.at(index - 1).next = node;

		return node;
	};

	/**
	 * Remove a `Node` at the given `index`
	 * @param {number} index - Index of `Node` to be removed
	 *
	 * @return {Object} Removed `Node`'s value
	 */
	removeAt = (index) => {
		const previous = this.at(index - 1); // Get previous Node
		const removed = previous.next; // Get Node to be removed
		previous.next = previous.next.next; // Connect previous with upcoming Node
		return removed.value; // Return removed node's value
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
console.log(list.contains('Find me')); // => true

list.append(['T', 'e', 's', 't', 3]); // 6
console.log(list.find(['T', 'e', 's', 't', 3])); // => 6

list.append('Delete me');
list.pop(); // Delete 7 ^^

list.append({test: [1, 2, 3], test2: 'hello', test3: 23}); // New 7
console.log(list.find({test: [1, 2, 3], test2: 'hello', test3: 23})); // => 7

console.log(list.toString());
/*
	( "new head" ) -> ( [1,2,3] ) -> ( "hello" ) ->
	( "test" ) -> ( "test2" ) -> ( "Find me" ) ->
	( ["T","e","s","t",3] ) -> ( {"test":[1,2,3],"test2":"hello","test3":23} )
	-> null
*/

list.insertAt('Inserted', 5);
console.log(list.at(4));
/*
	{
		value: 'test2',
		next: Node {
			value: 'Inserted',
			next: Node { value: 'Find me', next: [Node] }
		}
	}
*/

list.removeAt(5);
console.log(list.at(5)); // => Node {value: 'Find me', next: ...}
