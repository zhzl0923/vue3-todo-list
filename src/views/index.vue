<template>
  <n-card title="ToDoList" class="main-content">
    <add-todo></add-todo>
    <n-space style="margin-top: 10px">
      <router-link to="/all">
        <n-tag type="info" checkable :checked="path == '/all'">所有</n-tag>
      </router-link>
      <router-link to="/unfinished">
        <n-tag type="info" checkable :checked="path == '/unfinished'">
          未完成
        </n-tag>
      </router-link>
      <router-link to="/finished">
        <n-tag type="info" checkable :checked="path == '/finished'">
          已完成
        </n-tag>
      </router-link>
    </n-space>
    <router-view></router-view>
  </n-card>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { NCard, NTag, NSpace } from "naive-ui";
import { AddTodo } from "@/components/Todos";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: {
    AddTodo,
    NCard,
    NTag,
    NSpace,
  },
  setup() {
    const route = useRoute();
    const path = ref(route.path);
    watch(
      () => route.path,
      (p) => (path.value = p)
    );
    return { path };
  },
});
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
}
.main-content {
  width: 80%;
  max-height: 70%;
  margin: 10% auto 0;
}
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
</style>