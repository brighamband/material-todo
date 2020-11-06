import "./styles.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "@material-ui/core";

import TodoList from "./TodoList";

const App = () => {
  const [completed, setCompleted] = useState([]);
  const [notCompleted, setNotCompleted] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        console.log("Api Todos", response.data);
        const done = response.data.filter(
          (item) => item.completed === true && item.id < 30
        );
        setCompleted(done);
        console.log("done", done);
        const notDone = response.data.filter(
          (item) => item.completed === false && item.id < 30
        );
        console.log("not done", notDone);
        setNotCompleted(notDone);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowCompleted(true)}
        >
          Completed
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowCompleted(false)}
        >
          Not Completed
        </Button>
      </ButtonGroup>
      <TodoList
        todos={showCompleted ? completed : notCompleted}
        showCompleted={showCompleted}
        notCompleted={notCompleted}
        setNotCompleted={(value) => setNotCompleted(value)}
        completed={completed}
        setCompleted={(value) => setCompleted(value)}
      />
    </div>
  );
};

export default App;
