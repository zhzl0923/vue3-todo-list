import { TodoItem } from "@/store/modules/todos";

export interface TodosProps {
  todos: TodoItem[];
  updateTodos: (todo: TodoItem) => void;
  delTodo: (id: number) => void;
}
