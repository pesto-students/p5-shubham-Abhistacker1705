class Queue{
    constructor(){
    this.s1 = []; 
    this.s2 = [];
    }
enqueue(data){
    console.log(this.s1)
    this.s1.push(data)
    }

dequeue(){
    while(this.s1.length!=0){
        this.s2.push(this.s1.pop())
    }
    return console.log(this.s2.pop())
    }

printQueue(){
        let arr = []
        while(this.s2.length!=0){
            arr.push(this.s2.pop())
        }
        return console.log(arr)
    }
}

const q1 = new Queue();
console.log(q1)
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
// console.log(q1.s1);
q1.printQueue();
q1.dequeue();
q1.printQueue();