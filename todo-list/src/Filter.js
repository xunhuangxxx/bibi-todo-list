import React, {useState } from 'react';

const Filter = ({setTodos, setSelectedValue, selectedValue}) => {
    const options = ["All","Done done","Undone",];
   
    const handleFilter = (e) => {
        setSelectedValue(e.target.value);
        
    }
    
    return (
        <div>
            <select options={options} value={selectedValue} onChange={handleFilter} placeholder="Filter">
               <option value="all">All</option>
               <option value="donedone">Done done</option>
               <option value="undone">Undone</option>
            </select>
        </div>
    )

}

export default Filter;