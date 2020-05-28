import './styles.css';

import {Todo , TodoList} from './clases'; 
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './clases/todo.class.js';
//import { TodoList } from './clases/todo-lists.class';

export const  todoList = new TodoList(); 

todoList.todos.forEach( todo => crearTodoHtml( todo)); 
//todoList.todos.forEach(crearTodoHtml);  alternativa 