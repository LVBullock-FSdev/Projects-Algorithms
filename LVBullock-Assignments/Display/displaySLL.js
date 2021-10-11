//data structure representing the single node
class LinkedListNode{
    constructor(word) {
        this.word = word;
        this.next = null; //points to the next if null, end of the list
    }
}

var node1 = new LinkedListNode("apple");
var node2 = new LinkedListNode("orange");
    node1.next = node2;
var node3 = new LinkedListNode("banana");
    node2.next = node3;
var node4 = new LinkedListNode("pineapple");
    node3.next = node4;
var node5 = new LinkedListNode("dragonfruit");
    node4.next = node5;

class SLL{
    constructor() {
        this.head = null;
    }

    // Display the words of all the nodes in the list
    display() {
        var listStr = ""; // Empty string that will contain the words of the list
        // If the list is empty
        if (this.head == null) {
            return ""; // Could say "return 'Empty list'"
        }
        // We have at least one node
        listStr += this.head.word; // Concatenates the first word in the list
        // For the second node onwards, we'll add ", " + word;
        var runner = this.head.next;
        while (runner != null) {
            listStr += ", " + runner.word; // Add the node's word to the list
            runner = runner.next; // Move the runner to the next node
        }
        return listStr;
    }
}


var mySLL = new SLL();
mySLL.head = node1;
console.log("My Singly Linked List contains: " + mySLL.display());