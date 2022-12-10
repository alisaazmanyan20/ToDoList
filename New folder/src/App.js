import './App.css';
import {useEffect, useState} from "react";
import TodoList from "./Components/TodoList/todoList";
import TodoForm from "./Components/TodoForm/todoForm";

function App() {


    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState(true);



    useEffect(() => {
        const raw = localStorage.getItem('todos');
        return setTodos((JSON.parse(raw)));
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const onDelete = (todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    };


    const hideComplete = () => {
        setChecked(!checked)
        if (checked) {
            todos.map((item) => {
               return  item.isCompleted = false;
            })
            setTodos(todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    };


    const onChange = (newTodo) => {
        setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
                return newTodo;
            }
            return todo;
        }))
    };

    return (
        <div className="todo">
            <div className="hide-checkbox">
                <input
                       type="checkbox"
                       id="scales"
                       name="scales"
                       onChange={() => hideComplete()}
                       />
                <label>Hide Completed</label>
            </div>
            <TodoForm onAdd={(text) => {
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        text: text,
                        isCompleted: false
                    }
                ])
            }}/>
            <TodoList todos={todos}
                      onDelete={onDelete}
                      onChange={onChange}
            />
        </div>
    );
}

export default App;
