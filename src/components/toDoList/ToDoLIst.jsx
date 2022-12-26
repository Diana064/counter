// import { ListItem, ListDeleteBtn, ListTodo } from './ToDoList.style';

import classNames from 'classnames';
const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  // <>
  //   <h2>TODo LIST</h2>
  //   <ListTodo>
  //     {todos.map(({ id, text }) => (
  //       <ListItem key={id}>
  //         <p>{text}</p>
  //         <ListDeleteBtn onClick={() => onDeleteTodo(id)}>Delete</ListDeleteBtn>
  //       </ListItem>
  //     ))}
  //   </ListTodo>
  // </>
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
export default ToDoList;
