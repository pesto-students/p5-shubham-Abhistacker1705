function createStack() {
    let items = [];

    function push(item){
        items.push(item);
        }

    function pop(){
        return items.pop();
        }

        return {push,pop};//functions returned as objects  
    
    }

const stack = createStack();
// console.log(stack);
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);//can't access items because we have not returned the items array to stack
console.log(stack.items= [10,100,1000]); //elements are not modified
console.log(stack.pop());//10 will be popped
console.log(stack.pop());// => undefined as no more elements to pop out from