import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      itemList: data,
      toggleItem: null,
    };
  }

  addItem = (itemName) => {
    // This is Bad - this.state.groceries.push(newItem)
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      itemList: [...this.state.itemList, newItem],
    });
  };

  toggleItem = (id) => {
    this.setState({
      itemList: this.state.itemList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      itemList: this.state.itemList.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <div>
          <TodoList
            itemList={this.state.itemList}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
