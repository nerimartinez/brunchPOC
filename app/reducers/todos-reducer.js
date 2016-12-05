const initialState = {
  cart: [
    {
      id: 14,
    title: "uno",
    checked: false
  },
  {
    id: 24,
  title: "dos",
  checked: true
  },
  {
    id: 34,
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
    var item = state.filter(todo => todo.id === action.todo.id);
    console.log(item);
    return state.update(state, {
      collection: {
        [34]: {checked:true}
      }
    })
       return state.filter(todo => todo.id !== action.todo.id);
    break;
    default:
      return state
  }
}





/*export default function(){
  return [
    {
      id: 1,
    title: "uno",
    checked: false
  },
  {
    id: 2,
  title: "dos",
  checked: true
  },
  {
    id: 3,
  title: "tres",
  checked: false
  }
  ]
}*/
