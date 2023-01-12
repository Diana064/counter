import classNames from 'classnames';
import ToDo from 'components/todo/ToDo';
const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <ToDo
          text={text}
          completed={completed}
          onDeleteTodo={() => onDeleteTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      </li>
    ))}
  </ul>
);
export default ToDoList;
