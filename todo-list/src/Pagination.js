import React, {useState} from 'react';

const Pagination = ({todos, handlePage}) => {
    console.log(todos);
    //3 items per page
    const totalPages = Math.ceil(todos.length/3);
    let pages =[];
    for(let i = 0; i < totalPages; i++){
       pages.push({
         id: i+1        
       });
    } 

    return (
      
        <div className='pagination'>
          
             {pages.map(page => (
                <button id={page.id} onClick={handlePage}>{page.id}</button> 
              )
             )}
        </div>
    )
}

export default Pagination;