class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    } 
}
class Linkedlist{
    constructor(data){     
        this.head = new Node(data);
        this.tail = this.head;
        this.size = 1;
    }
addAtEnd(data){
    let currentnode = this.head;
    while(currentnode==null){
        currentnode.next  = new Node(data);
        this.tail = currentnode.next;
        this.size++;
    }
    while(currentnode.next!=null){
        currentnode = currentnode.next;
    }
    let n1 = new Node(data);
    this.tail = n1;
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


rotateLL(k){
    this.tail.next = this.head; //connected tail next to head
    let curr = this.head;       //created new variable and assigned as head
    for(let i =1; i<k; i++){
        this.tail = this.tail.next; // tail changes to tail plus (k-1)th element as it currently is circular list
        curr = curr.next;           //current moves from head to head plus (k-1)th element
    }
    this.tail = this.tail.next;     // tail changed to next element
    this.head = curr.next;          // head assigned as next of current pointer
    curr.next =null;                //then current changed to null so that list ends there instead of circular list
}
}

const ll = new Linkedlist(1);
ll.addAtEnd(2);
ll.addAtEnd(3);
ll.addAtEnd(4);
ll.addAtEnd(5);
ll.addAtEnd(6);
ll.addAtEnd(7);
ll.rotateLL(4);
ll.printLL();
// console.log(ll.head.data);
// console.log(ll.tail.data);
