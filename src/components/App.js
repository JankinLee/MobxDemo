import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import TodoList from './TodoList';

@inject('demoStore')
@observer
class App extends Component {
  constructor (props) {
    super(props);
    this.demoStore = props.demoStore;
  }
  render () {
    return <TodoList store={this.demoStore}></TodoList>;
  }
}

export default App;
