import logo from './logo.svg';
import './App.css';
import List from "./List";
import React, {useState} from 'react';
import AddToDo from "./AddToDo";



function App() {
  
  const handleAdd = (e) => {
    return e.target.value;

  }
  
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h2> Todo-List </h2>
      <AddToDo setTodos={setTodos}/>
       
      <div>
        <ul>
          <List todos={todos}/>
        </ul>
      </div>
     

    </div>
  );
}

export default App;
