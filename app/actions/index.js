// REVIEW
// Interesting idea for generating id numbers,
// but it relies this small piece of global state.
// I suggest you get the current system time in milliseconds.
// There are plenty examples on Google on how to do it.
// Try moving the action types from strings to constants;
// you can create a file like actionTypes.js with something
// like this:
// export const CHECK_TODO = "todos/CHECK"
// Because linters will be able to to checks, like
// checking if the variable is already declared or something eles.
// For example if you add "use strict"; you shouldn't be able to use
// undeclared variables. It will make your code stronger.

var id = 3;

 export const checkTodo = (todo) => {
  // REVIEW
  // It is not very clear if the todo argument is an object
  // or just a string. I'd suppose it is an object,
  // but the "addTodo" should also receive an object.
  // It is somewhat ambiguous. Also, try setting up the todo
  // object outside the action; just pass the object to it.
   return {
     type: "CHECK_TODO",
     todo: todo
   }
 };

 export const addTodo = (todoTitle) => {
   return {
     type: "ADD_TODO",
    id:   id++,
    // REVIEW
    // id: getSystemTime() or something like it
    title: todoTitle,
    checked: false
   }
 };

 export const delTodo = (todo) => {
   return {
     type: "REMOVE_TODO",
    todo: todo
   }
 };
