"use strict";
import * as t from './action-types';
import fetch from 'isomorphic-fetch';

const getURL = "http://localhost:4000/todos";

export const checkTodo = (todo) => {
    return {
        type: t.CHECK_TODO,
        todo: todo
    }
};

export const addTodo = (todoTitle) => {
    return {
        type: t.ADD_TODO,
        todo: {
        id: getRandomId(),
        title: todoTitle,
        checked: false
      }
    }
};

export const delTodo = (todo) => {
    return {
        type: t.REMOVE_TODO,
        todo: todo
    }
};

 function loadTodos  (todos)  {
  console.log("todos");
    return {
        type: t.LOAD_TODO,
        todos: todos
    }
};

function getRandomId() {
    return new Date().getTime();
}

export function getTodos(dispatch)
{
  return dispatch =>{ fetch(getURL)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
       dispatch(loadTodos(res.data));
    })
  }
}
