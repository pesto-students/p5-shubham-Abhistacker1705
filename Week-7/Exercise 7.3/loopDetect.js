class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
        globalThis.size++;
    } 
}
class Linkedlist{
    constructor(data){ 
        this.head = new Node(data);
        globalThis.size = 1;
    }

size(){
    return globalThis.size;
}

detectLoop(Node){
    let slow = this.head;
    let fast = this.head;
    while(slow.next !== null && fast!==null){
        // console.log( "fast",fast)
        // console.log( "slow",slow)
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false
    // fast = this.head;
    // var count = 0;
    // while(fast.next!==check){
    //     // console.log(slow);
    //     console.log(count);
    //     // console.log(check);
    //     fast = fast.next;      // tried to check and display if given input node is connected but not working 
    //     count++;
    // }
    // if(count ==Node){
    //     return true
    // }else{
    //     return false
    // }
}
}



const ll = new Linkedlist(1);
const n1 = ll.head;
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n5;            //loop
// console.log(globalThis.size);
console.log(ll.detectLoop(4));