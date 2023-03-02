import React, {useState } from 'react';


const AddToDo = ({setTodos}) => {
    const [input, setInput] = useState("");
    
        return (
            <div>
              <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
              <button onClick={()=>{
                  if(input.length !== 0){
                    setTodos(prev => {
                    const newTodo = [...prev]; 
                    newTodo.push({id: prev.length, todo:input, completed:"imcompleted"});
                    return newTodo; 
                    }); 
                    setInput(""); 
                  }               
              }}>Add</button>
            </div>
        );

} 
    
export default AddToDo;