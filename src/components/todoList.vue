<template>
    <ul>
      <TodoListItem v-for="todoItem in provideData" :key="todoItem.id" :item="todoItem" />
    </ul>
  </template>
<script setup>
import TodoListItem from "./todoListItem.vue";
import { inject } from "vue";
const provideData = inject["provideData"]
</script>
 