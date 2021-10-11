//data structure representing the single node
class SLLNode{
    constructor(value) {
        this.value = value;
        this.next = null; //points to the next if null, end of the list
    }
}

var node1 = new SLLNode(45);
    // console.log("Node 1:  ");
    // console.log(node1);
var node2 = new SLLNode(72);
    node1.next = node2;
    // console.log("Node 2:  ");
    // console.log(node2);
var node3 = new SLLNode(3);
    node2.next = node3;
    // console.log("Node 3:  ");
    // console.log(node3);
var node4 = new SLLNode(1000);
    node3.next = node4;
    // console.log("Node 4:  ");
    // console.log(node4);

//Data Structure representing the Entire List
class SLL{
    constructor() {
        this.head = null;
    }

    //Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    // time: O(1)
    // space: O(n), need 1 for new node
    addFront(value) {
        //add node to front and then return the updated SLL
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    //Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFrontNode() {  //resource:  https://daveceddia.com/linked-lists-javascript/
        //add node to front and then return the updated SLL

        if(!this.head){
            return null;
        }

        var removeFront = this.head;
        this.head = removeFront.next;

        removeFront.next = null;

        if(removeFront === this.tail) {
            this.tail = null;
        }
        return removeFront;
    }


    // time: O(n)
    // space: O(n), no additional space
    printList() {
        //Print all of the nodes
        var curr = this.head;
        while(curr!= null) {
            console.log(curr.value); //first 2 nodes will print, but not the rest
            curr = curr.next;
        }
        return this;
    }

    // // time: O(n)
    // // space: O(n), no additional space
    isValueInSLL(value) {
        var runner = this.head;
        while(runner!=null) {
            // do something
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

    //Write a method to return the value (not the node) at the head of the list. If the list is empty, return null
    printFrontValue() {
        //Print all of the nodes
        var head = this.head;
        if(head!= null) {
            console.log(head.value); //first 2 nodes will print, but not the rest
            return this;
        }
        else{
            if(this.size == 0){
                return "List is empty";
                }
        }
    }

}

var mySLL = new SLL();

// console.log("Original Nodes:");
// console.log(node1, node2, node3, node4);
// console.log("\n");

mySLL.head = node1;
// console.log("Value at the Head of the original node:")
// console.log(mySLL.head);
// console.log("\n");

mySLL.addFront(81);
console.log("List after adding to the front of the Original Node:");
mySLL.printList();

mySLL.removeFrontNode();
console.log("List after first node removed:");

mySLL.printList();
console.log("Value at the head of the List:");

mySLL.printFrontValue();
console.log("\n");

// console.log(mySLL.isValueInSLL(13));
// console.log(mySLL.isValueInSLL(3));


