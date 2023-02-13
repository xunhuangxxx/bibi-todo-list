import logo from './logo.svg';
import './App.css';
import List from "./List";
import React, {useState} from 'react';
import AddToDo from "./AddToDo";



function App() {
 
  
  const [todos, setTodos] = useState([]);

  const handleCompleted = (e) => {
       e.target.className = 'completed'; 
       todos[e.target.id].completed = true;   
  }

  const handleRemove = (id) => {
      setTodos((prev)=>{
        const newTodo = [...prev];
        const todoId = newTodo.findIndex(obj => obj.id === id);
        newTodo.splice(todoId, 1);
        
        console.log(todoId);
        return newTodo;
    });
      
      
  }
  console.log(todos);
  return (
    <div className="App">
      <h2> Todo-List </h2>
      <AddToDo setTodos={setTodos}/>
       
      <div>
        <ul>
          <List todos={todos} setTodos={setTodos} handleCompleted={handleCompleted} handleRemove={handleRemove}/>
        </ul>
      </div>
     

    </div>
  );
}

export default App;
