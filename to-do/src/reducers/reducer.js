export const initialState = {
    todoItems: [{
        task: 'Figure out Nothing and Solve Everything',
        completed: false,
        id: 1
    }]
}


export function reducer(state, action) {

    switch (action.type) {

        case 'TOGGLE_ITEM':
            return {...state,
                todoItems: state.todoItems.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            }
        case 'ADD_TASK':
            const newTask = {
                task: action.payload,
                completed: false,
                id: Date.now()
            };
            console.log(newTask)
            return {...state, todoItems: [...state.todoItems, newTask] }

        case "CLEAR_COMPLETED":
            return {...state, todoItems: state.todoItems.filter(item => !item.completed) }

        default:
            return state;
    }
}