import './styles/styles.css';
import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './classes';

export const tareaLista = new TodoList();

tareaLista.todos.forEach( todo => crearTodoHtml( todo ) );
