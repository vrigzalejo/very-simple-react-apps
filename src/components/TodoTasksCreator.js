import React from 'react';

class TodoTasksCreator extends React.Component
{
  defaultData = {
    itemText: ""
  };

  constructor(props)
  {
    super(props);
    this.state = this.defaultData;
  }

  createTask = () => {
    this.props.callback(this.state.itemText);
    this.setState({itemText: ""});
  }

  changeItemText = event => this.setState({ itemText: event.target.value });

  render = () =>
    <div className="m-1">
      <input className="form-control"
        value={this.state.itemText}
        onChange={this.changeItemText} />
      <button className="btn btn-danger mt-1"
        onClick={this.createTask}>
         Add a New Task
      </button>
    </div>
}

export default TodoTasksCreator;