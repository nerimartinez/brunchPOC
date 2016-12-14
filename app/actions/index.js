"use strict";
import * as t from './action-types';

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

function getRandomId() {
    return new Date().getTime();
}
