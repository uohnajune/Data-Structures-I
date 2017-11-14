/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  enqueue(value) {
    this.storage.push(value);
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return null;
    this.size--;
    return this.storage.shift();
  }
  size() {
    return this.size;
  }
}

module.exports = Queue;
