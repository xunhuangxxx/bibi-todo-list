import logo from './logo.svg';
import './App.css';
import List from "./List";
import React, {useState, useEffect} from 'react';
import AddToDo from "./AddToDo";
import Search from './Search';
import Filter from './Filter'
import Pagination from './Pagination';



function App() {
 
  const [todos, setTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedValue , setSelectedValue ] = useState("All");
  const [page, setPage] = useState("1");
  ;

  const handlePage = (e) => {
    setPage(e.target.id);
   
  }
  


  const handleCompleted = (e) => {
       
       e.target.className = 'completed'; 
       setTodos((prev) => {
         const newTodo = [...prev];
         const todoId = newTodo.findIndex(obj => obj.id == e.target.id);
         console.log(todoId);
         newTodo[todoId].completed = "completed";
         return newTodo;
       });
         
  }

  const handleRemove = (id) => {
      setTodos((prev)=>{
        const newTodo = [...prev];
        const todoId = newTodo.findIndex(obj => obj.id === id);
        newTodo.splice(todoId, 1);
        
        console.log(todoId);
        return newTodo;
    });
         
  }
  
  let newList = todos;

  const handleFilter = (arr) =>{
      if(selectedValue==="donedone"){
        
        console.log(arr);
        return arr.filter(todo => todo.completed === "completed")
        
      }else if(selectedValue==="undone"){  
        return arr.filter(todo=> todo.completed === "imcompleted");
        
      }else{
        return arr;        
      }
  }
  
  const handleSearch = (arr, keyword) =>{
      const result = [];
      if(keyword !== ""){   
        arr.map(todo => {
          if(todo.todo.includes(keyword)){
              result.push(todo);
          }
        });     
      }else{
        return arr;
      }
      
      return result;
  }
   
  const handleDisplay = (list) => {
      let displayPage;

      displayPage = list.filter((todo, index) => index < page*3 
      && index >= page*3-3);
    if(displayPage.length === 0 && page-1>=1){
      setPage(page-1);
    }
    return displayPage; 
  }
         
   
   newList = handleFilter(newList); 
   newList = handleSearch(newList, searchInput);
   const listForPage = [...newList];
   newList = handleDisplay(newList);  
  


  return (
    <div className="App">
      <h2> Todo-List </h2>
      <AddToDo setTodos={setTodos}/>
      <Search setSearchInput={setSearchInput} />
      <Filter setTodos={setTodos} setSelectedValue={setSelectedValue} selectedValue={selectedValue}/>
       
      <div>
        <ul>
          <List todos={newList} page={page} handleDisplay={handleDisplay} handleCompleted={handleCompleted} handleRemove={handleRemove}/>
        </ul>
      </div>
            
      <div className='pages'>
          <Pagination todos={listForPage} handlePage={handlePage}/>
      </div>
    </div>
  );
}

export default App;
