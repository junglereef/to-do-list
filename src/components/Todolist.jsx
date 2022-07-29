import React from "react";
import Todo from  "./Todo";

const Todolist = ({ todos, setTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list" />
      {todos.map(todo => (
        <Todo 
        setTodos={setTodos}
        todos={todos} 
        key={todo.id} 
        todo={todo}
        text={todo.text} />
      ))}
    </div>
  );
}

export default Todolist;