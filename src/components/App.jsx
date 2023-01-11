// import ColorPicker from './colorPicker/ColorPicker.jsx';
import shortid from 'shortid';
// import Counter from './counter/Counter';
// import DropDown from './dropDown/DropDown';

import { Component } from 'react';
// import ToDoList from './toDoList/ToDoLIst';
import initialTodos from '../todos.json';
// import Form from './form/Form';
// import ToDoEditor from './toDoEditor/ToDoEditor.jsx';
// import Filter from './filter/Filter.jsx';
import Modal from './modal/Modal';

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
    todos: [],
    filter: '',
    // name: '',
    // surname: '',
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  addToDo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };
  deleteTodos = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };
  getComplitedTodo = () => {
    return this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
  };
  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleSurnameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ surname: event.currentTarget.value });
  // };
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parseTodos = JSON.parse(todos);
    if (parseTodos) {
      this.setState({ todos: parseTodos });
    } else {
      this.setState({ todos: initialTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  render() {
    console.log('App render');
    const { filter, showModal } = this.state;
    const {
      deleteTodos,
      toggleCompleted,
      addToDo,
      changeFilter,
      getVisibleTodos,
    } = this;
    const totalTodo = this.state.todos.length;
    const completedTodos = this.getComplitedTodo();

    const visibleTodos = getVisibleTodos();

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>This is content of Modal Window</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio architecto sunt ullam quo suscipit consequatur, neque
              deleniti cupiditate voluptas eveniet inventore magnam iure
              ducimus! Nostrum officiis incidunt nesciunt natus?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
      // <div>
      //   <div>
      //     <p>Загальна к-ть todo: {totalTodo}</p>

      //     <p>Виконані todo: {completedTodos}</p>
      //   </div>

      //   {/* <Counter />
      // <DropDown />

      // </div>
      // <div>
      //   <input
      //     type="text"
      //     value={this.state.inputValue}
      //     onChange={this.handleInputChange}
      //   />

      // // todos
      // <div>
      //<p>Загальна к-ть todo: {totalTodo}</p>
      //   <p>Виконані todo: {completedTodos}</p>
      //   <ToDoEditor onSubmit={addToDo} />
      //   <Filter value={filter} onChange={changeFilter} />
      //   {/* <Form onSubmit={this.formSubmitHandler} />
      // //   <ColorPicker options={colorPickerOptions} /> */}
      //   <ToDoList
      //     todos={visibleTodos}
      //     onDeleteTodo={deleteTodos}
      //     onToggleCompleted={toggleCompleted}
      // />
      // </div>
      // //end todos
    );
  }
}
export default App;
