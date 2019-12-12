import {useState} from 'react';

export default (initialState) => {
    const [todos, setTodos] = useState(initialState);

    return{
        todos,
        addTodo: (todoText) => {
            setTodos([...todos, todoText]);
        },
        deleteTodo: (todoIndex) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);
            setTodos(newTodos);
        }
    };
};