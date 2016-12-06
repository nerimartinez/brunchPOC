// REVIEW
// There's something weird here, why are you creating
// an initial state as an object and then using a field of it
// which is an array? Just declared it as an array.

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
      // REVIEW
      // Pass the whole object on the action. Don't set it up here.
      // And you'll be able to do something like:
      // return state.concat(action.newTodo)
      // which is much simpler.
      return [
        ...state,
        {
          id: action.id,
        title: action.title,
        checked: action.checked
      }
    ];
    // No need to break after returns.
    // Google the JavaScript switch/case statement documentation.
      break;
    case "REMOVE_TODO":
       return state.filter(todo => todo.id !== action.todo.id);
    break;
    case "CHECK_TODO":
    // REVIEW
    // Use state.map.
    // state.map(todo => {
    // if (todo.id == action.todo.id) {
    //  ... check it...
    // } else { return it as it is
    // })
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
