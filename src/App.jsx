import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <header>
        <h1>Seven Dev's Todo List</h1>
      </header>
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
