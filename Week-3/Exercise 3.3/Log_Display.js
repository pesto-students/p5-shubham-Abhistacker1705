function createIncrement() {
    let count=0; 
    function increment() {
        count++;
    }
    
    let message=`Count is${count}`;
        function log() {
            console.log(message);
        }
        
        return[increment,log];
    }
    
    
    const[increment,log] =createIncrement();
    increment();
    increment();
    increment();
log();// What is logged?


Solution

/*log() output in console is 0 because in the instance createIncrement() is executed stores the values of increment() and log() as an array. 

During which time count value = 0 and message has value = "Count is 0".

After which increment is executed 3 times which changes value of count from 0 to 3 but message still has value "Count is 0" .

This message is displayed when log() is called.*/