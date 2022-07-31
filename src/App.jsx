import React, { useState, useEffect } from 'react';
import './App.css';
//Import Components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() { 
   
  //Estados
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Funçoes
  const filterHandler = () => {
  switch(status){
    case 'completed': 
    setFilteredTodos(todos.filter(todo => todo.completed === true))
    break;
    case 'uncompleted': 
    setFilteredTodos(todos.filter(todo => todo.completed === false))
    break;
    default: 
    setFilteredTodos(todos)
    break;
  }
}

  useEffect(() => {
    getLocalTodos();
  }, []);

  //UseEffect
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

//  Save to Local
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
   let todoLocal = JSON.parse(localStorage.getItem('todos'));
   setTodos(todoLocal);
  }
};

  return (
    <div className="App">
      <header>
        <h1>Seven Dev's Todo List</h1>
      </header>
      
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist filteredTodos={filteredTodos}  
      setTodos={setTodos}todos={todos}
      />
    </div>
  );
}

export default App;
