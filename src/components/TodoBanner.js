import React from 'react';

class TodoBanner extends React.Component
{
  defaultData = {
    appName: "Simple ToDo",
  };

  constructor(props)
  {
    super(props)
    this.state = this.defaultData;
  }

  render = () =>
    <h4 className="bg-primary text-white text-center p-2">
      {this.state.appName}
    </h4>
}

export default TodoBanner;