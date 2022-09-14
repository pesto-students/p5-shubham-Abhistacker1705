var Person = function(){};

Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}

class Teacher extends Person{
    constructor(subject,name){
        super(name);
        this.subject = subject;
    }
}


Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is teaching ${subject}`)
}// added teach function to prototype of Teacher na


var him = new Teacher();
console.log(him);
him.initialize("Shubham",28);
console.log(him); //teacher will have name and age after initialize function
him.teach("Promises");
// console.log(Person.prototype);
// console.log(Teacher.prototype);