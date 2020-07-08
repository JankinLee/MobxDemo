import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { List, Checkbox } from 'antd';

@observer
class TodoList extends Component {
  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  };

  onChange = (item) => {
    this.props.store.todos.find((todo) => {
      return todo.task === item;
    }).completed = !this.props.store.todos.find((todo) => {
      return todo.task === item;
    }).completed;
  };

  render() {
    const store = this.props.store;
    const data = store.todos.map((todo) => todo.task);

    return (
      <>
        <List
          header={<div>{store.report}</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <div>
              <Checkbox
                onChange={() => {
                  this.onChange(item);
                }}
              >
                {item}
              </Checkbox>
            </div>
          )}
        />
        <button onClick={this.onNewTodo}>New Todo</button>
      </>
    );
  }
}

export default TodoList;
