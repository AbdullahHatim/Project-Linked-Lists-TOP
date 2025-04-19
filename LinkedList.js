import { Node } from './Node.js'

export class LinkedList {
  #head = null
  #tail = null
  // append(value) adds a new node containing value to the end of the list
  append (value) {
    const node = new Node(value)

    // If The List is empty make the node The Head Node & The Tail Node
    if (this.#head === null) {
      this.#head = node
      this.#tail = node
      return
    }
    if (this.#tail === null) {
      this.#tail = node
      this.#head.next = node
      return
    }

    // Make the Current tail node point to this new node
    //  then make this new node the tail node
    this.#tail.next = node
    this.#tail = node
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend (value) {
    const node = new Node(value)

    // If The List is empty make the node The Head Node & The Tail Node
    if (this.#head === null) {
      this.#head = node
      this.#tail = node
      return
    }
    if (this.#tail === null) {
      this.#tail = node
      this.#head.next = node
      return
    }

    // make the new node point to the current head node
    //  then make the new node the head node
    node.next = this.#head
    this.#head = node
  }

  // size returns the total number of nodes in the list
  get size () {
    let next = this.#head
    let size = 0
    while (next !== null) {
      next = next.next
      size++
    }
    return size
  }

  // head returns the first node in the list
  get head () {
    return this.#head
  }

  // tail returns the last node in the list
  get tail () {
    return this.#tail
  }

  // at(index) returns the node at the given index
  at (index) {
    let next = this.#head
    let i = 0
    while (next !== null) {
      if (i === index) break
      next = next.next
      i++
    }
    return next
  }

  // pop removes the last element from the list
  pop () {
    const node = this.#tail
    this.#tail = this.at(this.size - 2)
    if (this.#tail) this.#tail.next = null
    if (this.#head === node) this.#head = null
    return node
  }

  // contains(value) returns true if the passed in value is
  //  in the list and otherwise returns false.
  contains (value) {
    let next = this.#head
    let valueExists = false
    while (next !== null) {
      if (value === next.value) {
        valueExists = true
        break
      }
      next = next.next
    }
    return valueExists
  }

  // find(value) returns the index of the node containing
  //  value, or null if not found.
  find (value) {
    let next = this.#head
    let i = 0
    let valueIndex = -1
    while (next !== null) {
      if (value === next.value) {
        valueIndex = i
        break
      }
      next = next.next
      i++
    }
    return valueIndex
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt (value, index) {
    const node = new Node(value)

    const atIndex = this.at(index)
    if (!atIndex) return

    const next = atIndex.next
    if (next) {
      node.next = next
    }
    atIndex.next = node

    if (this.#head === this.#tail) this.#tail = node
  }
  // removeAt(index) that removes the node at the given index.

  // toString represents your LinkedList objects as strings,
  //  so you can print them out and preview them in the console.
  //  The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString () {
    return this.head ? this.head.toString() : 'Empty List'
  }
}
