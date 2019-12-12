import React from 'react';
import TodoAdd from './components/TodoAdd';
import { Typography } from '@material-ui/core';
import TodoList from './components/TodoList';
import useTodoState from './customeHooks/useTodoState';
import './App.css';

const App = () => {
  // const [todos, setTodos] = useState([]);
  const {todos, addTodo, deleteTodo} = useTodoState([]);

  return(
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoAdd
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            // setTodos([...todos, trimmedText]);
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        // deleteTodo={(todoIndex) => {
        //   const newTodos = todos.filter((_, index) => index !== todoIndex);
        //   setTodos(newTodos);
        // }}
      />
    </div>
  );
}

export default App;