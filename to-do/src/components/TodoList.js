import React from 'react';
import Todo from './Todo';
import { Buttons } from './../style/Syled';

const TodoList = (props) => {
    return ( <
        div className = "task-item-list" > {
            props.todoData && props.todoData.map(item => ( <
                Todo key = { item.id }
                todo = { item }
                dispatch = { props.dispatch }
                />
            ))
        } < Buttons className = "clear-btn"
        onClick = {
            () => props.dispatch({ type: "CLEAR_COMPLETED" })
        } >
        Clear Completed <
        /Buttons> < /
        div >
    )
}


export default TodoList