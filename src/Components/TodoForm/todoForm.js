import React, {useState} from 'react';
import './todoForm.css';

const TodoForm = ({onAdd}) => {

    const [text, setText] = useState("");
    const [error, setError] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        if (text.trim() && text.length > 1 ) {
            onAdd(text)
            setText("")
        }
        if (text.length === 1) {
                setError(true);
        }
    };


    return (
        <div>
            <form className="todo-form"
                  onSubmit={onSubmit}
            >
                <input style={error ?
                        {
                            border: "1px solid red",
                            width: "85%",
                            height: "50px",
                            borderRadius: "4px",
                            outline: "none",
                            fontsize: "18px",

                } : {
                        width: "85%",
                        height: "50px",
                        borderRadius: "4px",
                        outline: "none",
                        fontsize: "18px",
                    }
                }
                       type="text"
                       placeholder="Write here..."
                       value={text}
                       onChange={(e) => {
                           setText(e.target.value)
                       }}

                />
                <button onSubmit={onAdd}>
                    Add
                </button>
                <br/>
                {error && text.length <= 1 ?
                <span style={{color: "red"}}>Task content can contain max 54 characters</span>: ""}
            </form>
        </div>
    );
};

export default TodoForm;
