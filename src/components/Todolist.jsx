import React from "react";
import Todo from  "./Todo";

const Todolist = ({ todos}) => {
  
  return (
    <div className="todo-container">
      <ul className="todo-list" />
      {todos.map(todo => (
        <Todo text={todo.text} />
      ))}
    </div>
  );
}

export default Todolist;