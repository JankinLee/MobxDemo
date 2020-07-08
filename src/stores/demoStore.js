import { observable, computed } from 'mobx';

class DemoStore {
  @observable
  todos = [];

  @computed get completeTodosCount() {
    let length = this.todos.filter(todo => todo.completed === true).length;
    return length;
  }

  @computed get report() {
    if (this.todos.length === 0)
      return 'none';
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return `Next todo: ${nextTodo ? nextTodo.task : 'none'}. Progress: ${this.completeTodosCount}/${this.todos.length}`;
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false
    });
  }
}

const demoStore = new DemoStore();
demoStore.addTodo("read MobX tutorial");
demoStore.addTodo("try MobX");

export default demoStore;