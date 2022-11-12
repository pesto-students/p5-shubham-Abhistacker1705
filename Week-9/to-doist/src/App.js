import './App.css';
import React,{ useState } from 'react';
import Header from './components/header';
import AddTask from './components/addTask';
function App() {
  const [input,setInput] = useState("");
  const [task,setTask] = useState([]);


  
    
  return (
    <div className="App">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
