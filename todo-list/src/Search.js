import React, {useState } from 'react';

const Search = ({setSearchInput}) => {
    const [input, setInput] = useState("");
    return (
        <div>
            <input placeholder='search' type='text' value={input} onChange={
                (e)=>{ 
                    setSearchInput(e.target.value);
                    setInput(e.target.value);
                }
            }/>
           
        </div>
    );
}

export default Search;