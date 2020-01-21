import React, {
    useReducer
} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
    initialState,
    reducer
} from './reducers/reducer';

import '../src/components/todo.css'
import { Body, FormContainer, Htmls, H2 } from './style/Syled';

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return ( <
        Htmls >
        <
        Body >
        <
        FormContainer >
        <
        H2 > TODO OR NOT TODO < /H2> <
        FormContainer > <
        TodoList todoData = {
            state.todoItems
        }
        dispatch = {
            dispatch
        }
        /> <TodoForm dispatch = {
        dispatch
    }
    /> </FormContainer > <
    /FormContainer> </Body > < /Htmls>
);

}



export default App;