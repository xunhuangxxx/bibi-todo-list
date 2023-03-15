import React from 'react';

const Pagination = ({todos, handlePage}) => {
  
    //3 items per page
    const pageNum = Math.ceil(todos.length/3);
    let pages =[];
    for(let i = 0; i < pageNum; i++){
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