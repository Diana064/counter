// import ColorPicker from './colorPicker/ColorPicker.jsx';
// import Counter from './counter/Counter';
// import DropDown from './dropDown/DropDown';

import { Component } from 'react';
import ToDoList from './toDoList/ToDoLIst';
import initialTodos from '../todos.json';
import Form from './form/Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    name: '',
    surname: '',
  };
  deleteTodos = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleSurnameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ surname: event.currentTarget.value });
  // };
  render() {
    const { todos } = this.state;
    const totalTodo = todos.length;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      // <div>
      //   <div>
      //     <p>Загальна к-ть todo: {totalTodo}</p>

      //     <p>Виконані todo: {completedTodos}</p>
      //   </div>
      //   <ToDoList todos={todos} onDeleteTodo={this.deleteTodos} />
      //   {/* <Counter />
      // <DropDown />
      // <ColorPicker options={colorPickerOptions} /> */}
      // </div>
      // <div>
      //   <input
      //     type="text"
      //     value={this.state.inputValue}
      //     onChange={this.handleInputChange}
      //   />
      <Form onSubmit={this.formSubmitHandler} />
    );
  }
}
export default App;
