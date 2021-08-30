<template>
  <n-card>
    <router-view></router-view>
  </n-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { NCard } from "naive-ui";

export default defineComponent({
  components: {
    NCard,
  },
  setup() {},
});
</script>