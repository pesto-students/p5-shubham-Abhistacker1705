import addTaskStyle from './addTask.module.css'
import React, { useState } from "react";

const AddTask = () =>{
    const [input,setInput] = useState("");
    const [task,setTask] = useState([]);
    function inputFn(event){
      setInput(event.target.value)
      // console.log(input);
      }
  
    function addTask(){
      if(!input){
        alert("Write Task in input tab to add that task")
        return
      }
      setTask([...task,input]);
      setInput("");
      // console.log(task);
    }
  
    function deleteFn(index){
      setTask(task.filter((a,inx)=>{
        return index!==inx;
      }));
    }

    function taskComplete(inx,e){
      if((e.target.style.textDecoration) === "line-through"){
        e.target.style.textDecoration="none";
        e.target.style.opacity = "1";
      }
      else {
        e.target.style.textDecoration="line-through";
        e.target.style.opacity = "0.5";
      }
  }

return(

<div id={addTaskStyle.items_container}>
  
    <input id={addTaskStyle.input} type="textbox" 
    placeholder='Add task' 
    onChange={inputFn} 
    value={input}
    />

    <button id={addTaskStyle.button} onClick={addTask}>Add</button>
    <p id={addTaskStyle.instruction}>Click on task to mark as Done..!!</p>
    {task.map((task,index)=>{
     return(
       <div id={addTaskStyle.listDiv} >

         <li onClick={(event)=>{taskComplete(index,event)}} id={addTaskStyle.listElem} >{task}</li>


         <button 
         id={addTaskStyle.deleteBtn}
         onClick={()=>{deleteFn(index)}}>
         <img src={require ("../images/deleteicon.png")} height="20px" alt='Delete icon'></img>
         </button>

        </div>
     )
    })}
    
    </div>
)

}
export default AddTask;