const myLinkedList = () => {
  let head = null;
  let length = 0;

  const append = (value) => {
    let node = myNode(value);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  const prepend = (value) => {
    let node = myNode(value);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      node.next = current;
      head = node;
    }
    length++;
  };
  const size = () => {
    return length;
  };

  const headNode = () => {
    if (head === null) {
      console.log("there is no head!");
    } else {
      return head;
    }
  };
  const tail = () => {
    if (head === null) {
      console.log("There is no tail!");
    } else {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }
      return current;
    }
  };

  const at = (index) => {
    if (head === null) {
      console.log("there is no linked list");
    } else {
      let current = head;
      for (let i = 0; i < index; i++) {
        if (current.next === null) {
          return "There is no item at this index number!";
        } else {
          current = current.next;
        }
      }
      return current;
    }
  };

  const pop = () => {
    if (head === null) {
      console.log("there is no linked list");
    } else {
      let current = head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      length--;
    }
  };

  const contains = (value) => {
    if (head === null) {
      console.log("there is no linked list");
    } else {
      let current = head;
      while (current.next != null) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      if (current.value != value) {
        return false;
      } else return true;
    }
  };

  const find = (value) => {
    if (head === null) {
      console.log("there is no linked list");
    } else {
      let current = head;
      let index = 0;
      while (current.next != null) {
        if (current.value === value) {
          return `Index number is: ${index}`;
        }
        index++;
        current = current.next;
      }
      if (current.value != value) {
        return "This value cannot be found!";
      } else return index;
    }
  };

  const toString = () => {
    if (head === null) {
      console.log("there is no linked list");
    } else {
      let current = head;
      let str = "";
      while (current.next != null) {
        str = str + ` (${current.value}) >>`;
        current = current.next;
      }
      str = str + ` (${current.value}) >> null`;
      return str;
    }
  };
  return {
    append,
    prepend,
    size,
    headNode,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const myNode = (value) => {
  if (value) {
    value = value;
  } else {
    value = null;
  }
  next = null;
  return { value, next };
};

//Check if it is working
const linkedList = myLinkedList();

linkedList.append("1"); // adds (1)
linkedList.append("2"); // adds (2)
linkedList.append("3"); // adds (3)
linkedList.append("4"); // adds (4)
linkedList.append("5"); // adds (5)

console.table(linkedList.toString()); // (1) >> (2) >> (3) >> (4) >> (5) >> null

linkedList.prepend("0"); // adds (0) before (1)
console.table(linkedList.toString()); // (0) >> (1) >> (2) >> (3) >> (4) >> (5) >> null

console.log(linkedList.find("2")); //Index number is: 1
console.log(linkedList.find("99")); //This value cannot be found!

console.log(linkedList.size()); //6
console.log(linkedList.headNode().value); //0

console.log(linkedList.contains("5")); //true
console.log(linkedList.contains("Bora")); //false

linkedList.pop(); // removes (5)
console.table(linkedList.toString()); // (0) >> (1) >> (2) >> (3) >> (4) >> null
