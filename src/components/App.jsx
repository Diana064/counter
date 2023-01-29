// import ColorPicker from './colorPicker/ColorPicker.jsx';
import Counter from './counter/Counter';
// import DropDown from './dropDown/DropDown';
import Clock from './clock/Clock';
// import Form from './form/Form';
// import Tabs from './tabs/Tabs';
// import tabs from '../tabs.json';

import { Component } from 'react';
import shortid from 'shortid';
// import ToDoList from './toDoList/ToDoLIst';
// import ToDoEditor from './toDoEditor/ToDoEditor.jsx';
// import Filter from './filter/Filter.jsx';
// import Modal from './modal/Modal.jsx';

import initialTodos from '../todos.json';
// import IconButton from './iconButton/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
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
    // this.toggleModal();
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
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }
  render() {
    // console.log('App render');
    // const { filter, showModal } = this.state;
    // const {
    //   deleteTodos,
    //   toggleCompleted,
    //   addToDo,
    //   changeFilter,
    //   getVisibleTodos,
    // } = this;
    // const totalTodo = this.state.todos.length;
    // const completedTodos = this.getComplitedTodo();

    // const visibleTodos = getVisibleTodos();

    return (
      <div>
        {/* <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40px" height="40px" fill="white" />
        </IconButton> */}
        {/* <button type="button">Open Modal</button> */}
        {/* <Tabs items={tabs} /> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <ToDoEditor onSubmit={addToDo} />
          </Modal>
        )} */}
        {/* <p>Загальна к-ть todo: {totalTodo}</p>
        <p>Виконані todo: {completedTodos}</p> */}

        {/* <Filter value={filter} onChange={changeFilter} /> */}
        {/* 
        <ToDoList
          todos={visibleTodos}
          onDeleteTodo={deleteTodos}
          onToggleCompleted={toggleCompleted}
        /> */}
        {/* <Clock /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <Counter />
        {/* <DropDown /> */}
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}
      </div>
    );
  }
}
export default App;
