import React, {useState } from 'react';

const Search = ({setSearchInput}) => {
    const [input, setInput] = useState("");

    const debounce = (func, timeout=500) =>{
        let timer;
        return (...args) => {
           clearTimeout(timer);
           timer = setTimeout(()=>func(...args), timeout);
        }
     }
   
    return (
        <div>
            <input placeholder='search' type='text' value={input} onChange={
                (e)=>{ 
                    debounce(()=>setSearchInput(e.target.value))();
                    setInput(e.target.value);
                }
            }/>
           
        </div>
    );
}

export default Search;