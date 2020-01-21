import React from 'react';
import { Inputs, Submit, SmallContainer, FormContainer } from './../style/Syled';
class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            task: '',
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        console.log('YOUR ADD TASK BUTTON', this.state.task)
        this.props.dispatch({ type: "ADD_TASK", payload: this.state.task });
        this.setState({ task: '' })
    };

    render() {
        return (

            <
            form onSubmit = { this.submitItem } >
            <
            SmallContainer >
            <
            Inputs type = "text"
            placeholder = '...todo'
            value = { this.state.task }
            name = "task"
            onChange = { this.handleChanges }
            /> <Submit> Add Task </Submit >
            <
            /SmallContainer> < /
            form >

        )
    }
}

export default TodoForm