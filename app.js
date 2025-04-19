import { LinkedList } from './LinkedList.js'
const list = new LinkedList()
list.append('Hello')
// list.append('My')
console.log(list.insertAt('World', 0))
console.log(list.insertAt('World', 1))
// list.append('Name')

console.log(list.head)
console.log(list.tail)
console.log(list.toString())
