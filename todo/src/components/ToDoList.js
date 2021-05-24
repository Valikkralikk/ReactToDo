import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

import './ToDoList.css';

function ToDoList({todos}){
    return(
        <ul className='todoList'>
            {todos.map((todo,num)=>{
                return <ToDoItem todo={todo} key={todo.id} num={num}/>
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ToDoList;