import React, {useState } from 'react';


const AddToDo = ({setTodos}) => {
    const [input, setInput] = useState("");
    console.log(input);
    
        return (
            <div>
              <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
              <button onClick={()=>{ setTodos(prev => {
                const newTodo = [...prev]; 
                newTodo.push({id: prev.length, todo:input});
                return newTodo; 
              }); setInput(""); }}>Add</button>
            </div>
        );

} 
    
export default AddToDo;