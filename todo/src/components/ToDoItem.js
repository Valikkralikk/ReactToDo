import React from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.css';

function ToDoItem({todo,num}){
    return(
        <li className='todo'>
            <strong>
                {++num}
                <input type='checkbox' />
            </strong>
            {todo.text.toUpperCase()}
            <span><i className="fa fa-exclamation" aria-hidden="true"></i></span>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    num: PropTypes.number.isRequired
}

export default ToDoItem;