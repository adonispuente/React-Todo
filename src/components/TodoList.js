// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.itemList.map((object) => (
        <Todo key={object.id} item={object} toggleItem={props.toggleItem} />
      ))}
      <button className="clearBtn" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;
