const initialState = [{
    id: 0,
    title: "uno",
    checked: false
}, {
    id: 1,
    title: "dos",
    checked: true
}, {
    id: 2,
    title: "tres",
    checked: false
}];

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return state.concat(action.todo);
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.todo.id);
        case "CHECK_TODO":
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
