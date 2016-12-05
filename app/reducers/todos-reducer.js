const initialState = {
  cart: [
    {
      id: 0,
    title: "uno",
    checked: false
  },
  {
    id: 1,
  title: "dos",
  checked: true
  },
  {
    id: 2,
  title: "tres",
  checked: false
  }
  ]
}

export default function mainReducer(state = initialState.cart, action){
  switch (action.type){
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
        title: action.title,
        checked: action.checked
      }
    ];
      break;
    case "REMOVE_TODO":
       return state.filter(todo => todo.id !== action.todo.id);
    break;
    case "CHECK_TODO":
    var item = state.filter(todo => todo.id === action.todo.id)[0];
    var index = state.indexOf(item);
    item.title ="e";
    item.checked = !item.checked;
    state[index] = item;
    return state;/*.update(state, {
      collection: {
        [34]: {checked:true}
      }
    })*/
    break;
    default:
      return state
  }
}
