import React from 'react';
//import Redux from 'redux';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';



function counter(state, action) {
  if (typeof state === 'undefined') {
    return ['one','two', 'three']
  }

  var newItem = document.getElementById('newItem');

  switch (action.type) {
    case 'INCREMENT':
      state.push(newItem.value);
      return state;
    case 'DECREMENT':
    state.splice(0,1);
      return state;
    default:
      return state
  }
}

const store = createStore(counter)

function ListItem(props) {
return <li>{props.value} <button value={props.position} onClick={()=> removeElement(this)}>-</button></li>;
}

function removeElement(e)
{
console.info(e);
alert(e);
}

function NumberList(props) {
const numbers = props.numbers;
const listItems = numbers.map((number,ind) =>
<ListItem key={ind} position={ind}
          value={number} />
);
return (
<ul>
  {listItems}
</ul>
);
}

document.addEventListener('DOMContentLoaded', () => {

document.getElementById('newItem')
.addEventListener('keypress', function (e) {
var key = e.which || e.keyCode;
if (key === 13) { // 13 is enter
  store.dispatch({ type: 'INCREMENT' })
  newItem.value = '';
}
})


function renderita() {
ReactDOM.render(
<NumberList numbers={store.getState()} />,
document.getElementById('root')
);
}

renderita();
store.subscribe(renderita);
});
