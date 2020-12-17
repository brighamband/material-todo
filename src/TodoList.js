import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const addToCompleted = (itemToAdd) => {
    props.setCompleted([...props.completed, itemToAdd]);
  };

  const removeFromNotCompleted = (itemToRemove) => {
    const notDone = props.notCompleted.filter(
      (item) => item.id !== itemToRemove.id
    );
    props.setNotCompleted(notDone);
  };

  return (
    <>
      {props.todos.map((item) => (
        <ul key={item.id}>
          <TodoItem
            item={item}
            showCompleted={props.showCompleted}
            removeFromNotCompleted={removeFromNotCompleted}
            addToCompleted={addToCompleted}
          />
        </ul>
      ))}
    </>
  );
};

export default TodoList;
