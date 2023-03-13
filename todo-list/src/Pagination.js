import React from 'react';

const Pagination = ({todos}) => {
    //3 items per page
    const pageNum = Math.ceil(todos.length/3);
    let pages =[];
    for(let i = 0; i < pageNum; i++){
       pages.push({
         id: i+1        
       });
    }
    console.log(pages);
  

    return (
      
        <div className='pagination'>
          
             {pages.map(page => (
                <button>{page.id}</button>              
              )
             )}
        </div>
    )
}

export default Pagination;