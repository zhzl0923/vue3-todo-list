<template>
  <todos
    :todos="allTodos"
    :updateTodos="updateTodos"
    :delTodo="delTodo"
  ></todos>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodosStore, TodoItem } from "@/store/modules/todos";
import { Todos } from "@/components/Todos";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: { Todos },
  setup() {
    const store = useTodosStore();
    const updateTodos = (todo: TodoItem): void => {
      store.finishTodo(todo.id, !todo.isFinished);
    };
    const delTodo = (id: number) => {
      store.deleteTodo(id);
    };
    const { allTodos } = storeToRefs(store);
    return { allTodos: allTodos, updateTodos, delTodo };
  },
});
</script>
