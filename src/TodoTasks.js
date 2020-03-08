import React from 'react';
import TodoTasksCreator from './TodoTasksCreator';
import TodoTasksRows from './TodoTasksRows';
import VisibilityControl from './VisibilityControl';

class TodoTasks extends React.Component
{
  defaultData = {
    todoItems: [
      {
        action: "Buy flowers",
        done: false
      },
      {
        action: "Do workout",
        done: false
      },
      {
        action: "Wash dishes",
        done: true
      },
      {
        action: "Study React",
        done: true
      },
    ],
    showCompleted: false,
  };

  constructor(props)
  {
    super(props)
    this.state = this.defaultData;
  }

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null ? JSON.parse(data) : this.defaultData
    );
  }

  toggleTodo = todo => this.setState({
    todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? { ...item, done: !item.done } : item
    )
  });

  todoTableRows = done => 
    this.state.todoItems
      .filter(item => item.done === done)
      .map(
        item => <TodoTasksRows item={item} callback={this.toggleTodo} />
      )

  createNewTodo = task => {
    if (
      !this.state.todoItems.find(item => item.action === task)
    ) {
      this.setState(
        {
          todoItems: [
            ...this.state.todoItems,
            {
              action: task,
              done: false
            }
          ]
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      )
    }
  }

  countItemsTodo = done => this.state.todoItems.filter(t => t.done === done).length

  render = () =>
    <div className="containter-fluid">
      <div className="m-1">
        <p>Total Tasks: {this.countItemsTodo(true) + this.countItemsTodo(false)}</p>
        <p>Pending: {this.countItemsTodo(false)}</p>
        <p>Done: {this.countItemsTodo(true)}</p>
      </div>
      <TodoTasksCreator items={this.state.todoItems} callback={this.createNewTodo} />
      <table className="table table-striped table-bordered">
        <thead>
          <th>Todo Task Name</th>
          <th>Done</th>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>
      <div className="bg-danger text-white text-center p-2">
        <VisibilityControl description="Completed Tasks" 
          isChecked={this.state.showCompleted}
          callback={checked => this.setState({showCompleted: checked})} />
      </div>
      {
        this.state.showCompleted &&
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>Task Name</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {this.todoTableRows(true)}
          </tbody>
        </table>
      }
    </div>
}

export default TodoTasks;


