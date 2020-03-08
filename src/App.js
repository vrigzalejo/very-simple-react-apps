import React from 'react';
import logo from './logo.svg';
import TodoBanner from './TodoBanner';
import TodoTasks from './TodoTasks';
import './App.css';

class App extends React.Component
{
  render = () =>
    <div>
      <TodoBanner />
      <TodoTasks />
    </div>
}

export default App;
