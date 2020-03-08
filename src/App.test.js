import React from 'react';
import {shallow} from './enzyme'
import App from './App';
import TodoBanner from './components/TodoBanner';
import TodoTasks from './components/TodoTasks';

describe('<App />', () => {
  it('should see <TodoBanner />', () => {
    const component = shallow(<App />);
    expect(component.contains(<TodoBanner />)).toBe(true);
  });
  it('should see <TodoTasks />', () => {
    const component = shallow(<App />);
    expect(component.contains(<TodoTasks />)).toBe(true);
  });
});
