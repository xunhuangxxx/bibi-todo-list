import React from 'react';


const List = ({todos, handleCompleted, handleRemove}) => {

    return ( 
       <div>
        {        
            todos.map(todo => (
                <div className="list">
                   <li className='todo' id={todo.id}>{todo.todo}</li>
                   <button className={todo.completed} id={todo.id} onClick={handleCompleted}>Done done</button>
                   <button className='remove' id={todo.id} onClick={()=>{ handleRemove(todo.id)}}>Remove</button>
                </div>
            ))
        }
        
       </div>
       
    );    
}

export default List;