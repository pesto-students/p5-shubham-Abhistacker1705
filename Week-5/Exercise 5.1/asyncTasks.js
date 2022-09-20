// Used async await and created three process of fetching data from Pokemon API using Fetch
//Returned data is shown on the console of browser by adding script in head of html file


async function doTask1() {
  const res1 = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  if(res1.ok){
  // console.log(res1);
  const Ditto = await res1.json();
  // console.log(Ditto);
  console.log("First Task - " + Ditto.name);
  }else{
  console.log ("Error Occured while fetching")
  }
  
}
async function doTask2() {
  const res1 = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  if(res1.ok){
  // console.log(res1);
  const Pikachu = await res1.json();
  // console.log(Pikachu);
  console.log("Second Task - " + Pikachu.name);
  }else{
  console.log ("Error Occured while fetching")
  }
  
}

async function doTask3() {
  const res1 = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
  if(res1.ok){
  // console.log(res1);
  const Charizard = await res1.json();
  // console.log(Charizard);
  console.log("Third Task - " + Charizard.name);
  }else{
  console.log ("Error Occured while fetching")
  }
  
}




doTask1(); //calling all threeasynchronous functions
doTask2();
doTask3();



// Used Generator to fetch Pokemon names using Fetch API

function* outputGenarator(){
  console.log("Inside Generator")
  yield doTask1();
  yield doTask2();
  yield doTask3();
}


let taskGen = outputGenarator()

taskGen.next();
taskGen.next();
taskGen.next();
taskGen.next();