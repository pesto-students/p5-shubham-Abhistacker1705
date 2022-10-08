class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    } 
}
class Linkedlist{
    constructor(data){     
        this.head = new Node(data);
        this.size = 1;
    }
addAtEnd(data){
    let currentnode = this.head;
    while(currentnode==null){
        currentnode.next  = new Node(data);
        this.size++;
    }
    while(currentnode.next!=null){
        currentnode = currentnode.next;
    }
    let n1 = new Node(data);
    currentnode.next = n1;
    this.size++;
}
printLL(){
    let currentnode = this.head;
    while(currentnode!=null){
        console.log(currentnode.data);
        currentnode =currentnode.next;
    }
}

reverseLL(){
    let prev = null;
    let nextEl = this.head.next;
    let currentNode = this.head;
    while(nextEl!=null){
        this.head.next = prev;
        prev = this.head
        this.head = nextEl;
        nextEl= nextEl.next;
        this.head.next =prev;

    };
    

    }

sizeLL(){
    console.log(this.size);
}    

}
const ll = new Linkedlist("a");

ll.addAtEnd("b");

ll.addAtEnd("c");
ll.addAtEnd("d");
ll.addAtEnd("e");
ll.addAtEnd("f");
ll.addAtEnd("g");
console.log(ll.head);
// ll.addAtEnd("h");
// ll.printLL();
// ll.reverseLL();
// ll.printLL();
// ll.sizeLL();
