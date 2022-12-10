import React, {useState} from 'react';
import './todoForm.css';

const TodoForm = ({onAdd}) => {

    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text)
            setText("")
        }
    };


    return (
        <div>
            <form className="todo-form"
                  onSubmit={onSubmit}
            >
                <input type="text"
                       placeholder="Write here..."
                       value={text}
                       onChange={(e) => {
                           setText(e.target.value)
                       }}
                />
                <button
                    onSubmit={onAdd}
                >
                    Add</button>
                <br/>
            </form>
        </div>
    );
};

export default TodoForm;