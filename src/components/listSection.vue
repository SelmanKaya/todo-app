<template>
    <todoList />
    <!-- <ResultBar :itemCount="provideData.todoList.value.length" /> -->
  </template>
<script setup>
// import { inject } from "vue";
import todoList from "./todoList.vue";
// import ResultBar from "./resultBar.vue";

// const provideData = inject["provideData"]

const props = defineProps({
    todoList: {
        type: Array,
        required: true
      }
})
</script>