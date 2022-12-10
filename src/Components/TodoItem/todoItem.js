import React from 'react';
import Modal from "../ModalForDelete/modalDelete";
import './todoItem.css';



const TodoItem = ({todo, onChange, onDelete}) => {


    return (
        <div className="todo-item">
            <div className="todo-text">
                <input className="todo-item-checkbox"
                       type="checkbox"
                       checked={todo.isCompleted}
                       onChange={(e) => {
                           onChange({
                               ...todo,
                               isCompleted: e.target.checked
                           })
                       }}
                />
                <p style={{color: todo.isCompleted ? "lightgrey" : null}}>
                    {todo.text}
                </p>
            </div>
            <div className="todo-item-delete">
                <Modal
                    onDelete={onDelete} todo={todo}>
                    X
                </Modal>
            </div>
        </div>

    );
};

export default TodoItem;