/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);

    if(this.head){
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node; 
    }

    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    return this.vals.pop();

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.vals.shift();

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.vals[idx];

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this.vals[idx] = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    this.vals = this.vals.splice(0,idx) + val + this.vals.splice(idx + 1);

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    this.vals = this.vals.splice(0,idx - 1) + this.vals.splice(idx);

  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    for(let count = 0; count < this.vals.length; count++){
      total += this.vals[count];
    }
    return total / this.vals.length;
    
  }
}

module.exports = LinkedList;
