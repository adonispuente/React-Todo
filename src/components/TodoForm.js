import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      task: "",
    };
  }
  Change = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          <input
            name="task"
            type="text"
            placeholder="To do Items"
            onChange={this.Change}
            value={this.state.task}
          />
        </label>
        <label>
          <button onClick={this.submitForm}> Add Todo </button>
        </label>
        <label>
          <button> Clear Completed </button>
        </label>
      </form>
    );
  }
}

export default TodoForm;
