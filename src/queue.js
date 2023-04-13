const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  getUnderlyingList() {
      return this.front;
  }

  enqueue(value) {
      const NODE = new ListNode(value);
      
      if (!this.front) {
          this.front = this.back = NODE;
      } else {
          this.back.next = NODE;
          this.back = NODE;
      }
  }

  dequeue() {
      const NODE = this.front;

      if (this.front) {
        let toReturn = this.front;
        this.front = this.front.next;
        return toReturn.value;
    }  
      
      if (!this.front) {
          this.back = null;
      } 
  }

}

module.exports = {
  Queue
};
