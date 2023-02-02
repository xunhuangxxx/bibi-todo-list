import React, { useEffect, useState } from 'react';


const List = ({todos}) => {

    console.log(todos.todo);

    return ( 
       <div>
        {
            todos.map(todo => (<li>{todo.todo}</li>))
        }
       </div>
       
    );    
}

export default List;