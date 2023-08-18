# linked-list
TOP Assignment demonstrating creation and implementation of linked lists in Javascript

## Description
A linked list is somewhat similar to an Array. It is an object who holds a `value`, and a `pointer` to the next item in the list. So they look something like this.
```
list = {
	value: 'something',
	next: {
		value: 42,
		next: null,
	}
}
```
In this assignment I make two classes, one for the actual Linked List and another for the individual Nodes. The `Linked List` contains some basic functions that you would expect from a list-like object. 

Including: 
- `append(value)` - Add value to back
- `prepend(value)` - Add value to front
- `at(index)` - Get value at index
- `pop()` - Remove tail value
- `contains(value)` - Check if list contains value
- `find(value)` - Get index of value
- `toString()` - Convert whole list into a string

## Why?
Linked Lists are valuable becuase you can freely move items around the list without having to re-index the entire list. Whereas in your standard array, if you `shift()` an item to the front, it takes O(N) time (longer the array = longer it takes) because the program has to re-index the entire array. The old 0 index is now index 1 and so on.

### Skills Learned
- Why you would want to opt for a linked list instead of your average Array
- Better understand the use of `class` constructor syntax in Javascript
- Arrays and Objects cannot be compared using `a === b` unless `a` and `b` are both referring to the literal same array, not just a reference of the array
