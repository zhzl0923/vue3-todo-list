<template>
  <n-list bordered>
    <n-list-item v-for="(todo, index) in todos" :key="index">
      <template #prefix>
        <n-checkbox
          @update:checked="updateTodos(todo)"
          :checked="todo.isFinished"
        />
      </template>
      <template #suffix>
        <n-button type="error" @click="delTodo(todo.id)">删除</n-button>
      </template>
      <n-thing>
        <span :class="{ finished: todo.isFinished }">
          {{ todo.text }}
        </span>
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NList, NListItem, NCheckbox, NButton, NThing } from "naive-ui";
import { TodoItem } from "@/store/modules/todos";

export default defineComponent({
  components: {
    NList,
    NListItem,
    NCheckbox,
    NButton,
    NThing,
  },
  props: {
    todos: {
      type: Array as PropType<TodoItem[]>,
      required: true,
    },
    updateTodos: {
      type: Function as PropType<(todo: TodoItem) => void>,
      required: true,
    },
    delTodo: {
      type: Function as PropType<(id: number) => void>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scope>
.finished {
  text-decoration: line-through;
}
</style>
