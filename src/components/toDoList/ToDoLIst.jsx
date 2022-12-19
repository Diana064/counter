import { ListItem, ListDeleteBtn, ListTodo } from './ToDoList.style';
const ToDoList = ({ todos, onDeleteTodo }) => (
  <>
    <h2>TODo LIST</h2>
    <ListTodo>
      {todos.map(({ id, text }) => (
        <ListItem key={id}>
          <p>{text}</p>
          <ListDeleteBtn onClick={() => onDeleteTodo(id)}>Delete</ListDeleteBtn>
        </ListItem>
      ))}
    </ListTodo>
  </>
);
export default ToDoList;
