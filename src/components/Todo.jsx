import React from "react";

const Todo = ({text}) => {
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">  
                <i className="fas fa-check" />
            </button>
            <button className="trash-btn"> 
                <i className="fas fa-trash" />
            </button>
        </div>
    );
}

export default Todo; 