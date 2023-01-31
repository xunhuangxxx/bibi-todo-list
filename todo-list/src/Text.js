import React, { useEffect, useState } from 'react';


const Text = (handleAdd) => {
    const [input, setInput] = useState("");
    console.log(input);
    
        return (
            <div>
              <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
              <button onClick={(e)=>setInput("")}>Add</button>
            </div>
        );

} 
    
export default Text;