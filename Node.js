export class Node {
  constructor (value = null) {
    this.value = value
    this.next = null
  }

  // Kind of Recursive And will be affected by stack limit
  toString () {
    return `(${this.value}) -> ${this.next ? this.next.toString() : 'null'}`
  }
}
