import React from "react";
import { Button } from "@material-ui/core";

const TodoItem = (props) => {
  const markComplete = (markedItem) => {
    props.addToCompleted(markedItem);
    props.removeFromNotCompleted(markedItem);
  };

  return (
    <li>
      <span className="todo-title">{props.item.title}</span>
      {!props.showCompleted && (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => markComplete(props.item)}
        >
          Mark Complete
        </Button>
      )}
    </li>
  );
};

export default TodoItem;
