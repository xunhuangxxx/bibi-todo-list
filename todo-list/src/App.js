import logo from './logo.svg';
import React from 'react';
import './App.css';
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
`;

// const TaskCount = styled.span`
//   margin: 10px;
// `;

// const Tasks = styled.div`
// `;

// const TaskCount = styled.span`
//   margin: 10px;
// `;

// const Tasks = styled.div`s
// `;

function App() {
  return (
    <div className="App">
      Todo-List
    </div>
  );
}

export default App;
