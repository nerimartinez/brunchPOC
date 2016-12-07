import {
    CHECK_TODO,
    ADD_TODO,
    REMOVE_TODO
} from './action-types';
"use strict";

export const checkTodo = (todo) => {
    return {
        type: CHECK_TODO,
        todo: todo
    }
};

export const addTodo = (todoTitle) => {
    return {
        type: ADD_TODO,
        todo: {
        id: getRandomId(),
        title: todoTitle,
        checked: false
      }
    }
};

export const delTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo: todo
    }
};

function getRandomId() {
    return new Date().getTime();
}
