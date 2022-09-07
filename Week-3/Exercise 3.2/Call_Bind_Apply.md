# Call, Apply and Bind

**Example - Call**

```javascript
let person1 = {                 //First object
   
    first_Name : "Abhijith",
    last_Name : "Nair",

    sayFullname : function () {
        console.log("My full name is " + this.first_Name + " "+ this.last_Name);
    }
};
  

let person2 = {                 //Second object
    first_Name : "Shubham",
    last_Name : "Agarwal",
};

person1.sayFullname.call(person2); /*function borrowing ie.
                                     function borrowed from first object and used by second function*/
 ```

 **Example - Apply**

```javascript
 let totalToys = {                 //First object
   with_Abhi : 100,
   with_Shubham : 200 
};
  
let totalBallons = {                 //Second object
    with_Abhi : 10,
    with_Shubham : 20
};

function add(with_Saurabh,with_Naba,with_Ayan)  {
        let sum = with_Saurabh + with_Naba + with_Ayan + this.with_Abhi + this.with_Shubham;
        console.log("Total is : " + sum );
    }


add.apply(totalToys,[300,400,500]); 
add.apply(totalBallons,[30,40,50]);/* elements passed inth form of array
                                      which is difference bwn call and apply also easier to use when arrays need to be passed*/


```

**Bind - Example**

```javascript
//The bind() method returns a new function and allows passing in a this array and any number of arguments

let car1 = {                 //First object
   
    car_Company : "Toyota",
    car_Model  : "Fortuner"
};

let car2 = { 
                    //Second object
    car_Company : "Honda",
    car_Model : "City"
};
  
function carDetails()  {
        
        console.log("Car Company and Model name is : " + this.car_Company + " " + this.car_Model);
    }

    let car1_Details = carDetails.bind(car1);
    let car2_Details = carDetails.bind(car2); /*carDetails() function is binded with respective
                                                objects and stored to a variable which can be accsessed later by 
                                                calling the variable.*/
car1_Details(); //shows details of car1 object
car2_Details(); //shows details of car2 object

```