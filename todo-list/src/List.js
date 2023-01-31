import React, { useEffect, useState } from 'react';

const List = (handleAdd) => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    
    useEffect(()=>{
        return (
           <li>{handleAdd(input)}</li>

        )
        

      
    },handleAdd);
    
}

export default List;