<template>
  <!-- <VuePreloader color="blue" scale="0.6" /> -->

  <h3>ToDo List</h3>
  <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
  <listSection />
  <button @click="newTodo">todo ekle</button>
  <input v-if="showInput" v-model="textInput" @input="addNewTodo" />
</template>

<script setup>
import { provide, ref } from 'vue';
import VuePreloader from './components/VuePreloader.vue';
import listSection from './components/listSection.vue';


const showInput = ref(false);
const textInput = ref('');
const provideData = ref({
  todoList: [
    { id: 1, text: "Deneme #2" },
    { id: 2, text: "Deneme #2.1" },
    { id: 3, text: "Deneme #2.2" },
    { id: 4, text: "Deneme #2.3" },
    { id: 5, text: "Deneme #2.4" },
    { id: 6, text: "Deneme #2.5" }
  ]
});
const newTodo = () => {
  showInput.value = !showInput.value;
};

const deleteItem = (todoItem) => {
  provideData.value.todoList = provideData.value.todoList.filter(t => t !== todoItem);
};

const addNewTodo = (todo) => {
  provideData.value.todoList.push({
    id: new Date().getTime(),
    text: todo
  });
};
console.log('provideData :>> ', provideData);
provide("provideData", provideData.value);
provide("deleteItem", deleteItem);
</script>

