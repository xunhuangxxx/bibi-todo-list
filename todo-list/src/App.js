import logo from './logo.svg';
import './App.css';
import List from "./List";
import Tasks from "./Tasks";
import Text from "./Text";



function App() {

  const handleAdd = (e) => {
    e.preventDefault(); 
 }

  return (
    <div className="App">
      <h2> Todo-List </h2>
      <Text handleAdd={handleAdd}/>
       
      <Tasks>
         <div>
            <ul>
              <List handleAdd={handleAdd}/>
            </ul>
         </div>
      </Tasks>

    </div>
  );
}

export default App;
