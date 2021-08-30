import { defineStore } from "pinia";

export interface TodoItem {
  text: string;
  id: number;
  isFinished: boolean;
}

export enum filters {
  "all",
  "finished",
  "unfinished",
}

export interface ITodoState {
  todos: TodoItem[];
  filter: filters;
  nextId: number;
}

export const useTodosStore = defineStore("todos", {
  state: (): ITodoState => ({
    todos: [],
    filter: filters.all,
    nextId: 0,
  }),
  getters: {
    finishedTodos(state): TodoItem[] {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state): TodoItem[] {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    allTodos(state): TodoItem[] {
      return state.todos;
    },
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({ text: text, id: this.nextId++, isFinished: false });
    },
    finishTodo(id: number, isFinished: boolean) {
      for (let todo of this.todos) {
        if (todo.id == id) {
          todo.isFinished = isFinished;
          break;
        }
      }
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    },
  },
});
