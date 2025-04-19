import { LinkedList } from './LinkedList.js'
const list = new LinkedList()
list.append('Hello')
// list.append('My')
console.log(list.insertAt('Man', 0))
console.log(list.insertAt('World', 1))
list.append('Name')
list.prepend('So')
list.pop()

console.log(list.size)
console.log(list.toString())
console.log(list.head.toString())
