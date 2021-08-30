<template>
  <n-input-group>
    <n-input autosize style="min-width: 50%" v-model:value="text" />
    <n-button type="success" @click="addTodo">添加</n-button>
  </n-input-group>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NInputGroup, NInput, NButton } from "naive-ui";
import { useTodosStore } from "@/store/modules/todos";

export default defineComponent({
  components: {
    NInputGroup,
    NInput,
    NButton,
  },
  setup() {
    const store = useTodosStore();
    const text = ref("");
    const addTodo = () => {
      if (text.value != "") {
        store.addTodo(text.value);
        text.value = "";
      }
    };
    return { text, addTodo };
  },
});
</script>
