import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const TodoAdd = ({saveTodo}) => {
    const [text, setText] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                saveTodo(text);
                setText("")
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={(event) => {
                    setText(event.target.value)
                }}
                value={text}
            />
        </form>
    );
}

export default TodoAdd;
