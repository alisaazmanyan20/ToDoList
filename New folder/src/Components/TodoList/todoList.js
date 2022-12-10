import React, {useState} from 'react';
import TodoItem from "../TodoItem/todoItem";
import './todoList.css';

const TodoList = ({todos,onChange,onDelete}) => {

    

    return (
        <div className="todo-list">
            {
                todos?.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    );
};

export default TodoList;