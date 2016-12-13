import * as t from '../actions/action-types';

const initialState = [];

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case t.LOAD_TODO:
            console.log("action.todos");
            console.log(action.todos);
            return action.todos;
        case t.ADD_TODO:
            return state.concat(action.todo);
        case t.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.todo.id);
        case t.CHECK_TODO:
            return state.map(todo => {
                if (todo.id == action.todo.id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            })
        default:
            return state
    }
}
