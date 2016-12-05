var id = 0;

 export const checkTodo = (todo) => {
   return {
     type: "CHECK_TODO",
     todo: todo
   }
 };

 export const addTodo = (todoTitle) => {
   return {
     type: "ADD_TODO",
    id:   id++,
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
