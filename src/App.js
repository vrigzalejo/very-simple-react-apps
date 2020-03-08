import React from 'react';
import logo from './logo.svg';
import TodoBanner from './components/TodoBanner';
import TodoTasks from './components/TodoTasks';
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
