import IconButton from 'components/iconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
const ToDo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <IconButton onClick={onDeleteTodo} aria-label="Delete todo">
        <DeleteIcon width="20px" fill="white" />
      </IconButton>
      {/* <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
        Удалить
      </button> */}
    </div>
  );
};
export default ToDo;
