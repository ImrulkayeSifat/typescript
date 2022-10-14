import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId:number;
  title:string;
  completed:boolean;
}

axios.get(url).then(response =>{
  const todo = response.data as Todo;

  const userId = todo.userId;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(userId,title,completed);
});

const logTodo = (userId:number,title:string,completed:boolean)=>{
  console.log(userId,title,completed);
}