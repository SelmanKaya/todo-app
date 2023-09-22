<template>
  <!-- <VuePreloader color="blue" scale="0.6" /> -->

  <h3>ToDo List</h3>
  <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
  <listSection />
  <button @click="newTodo">todo ekle</button>
  <hr>
  <!-- <label for="textTodo"></label> -->
  <input v-if="showInput" id="textTodo" v-model="textInput"  @keydown.enter="todo(textTodo)"/> 
  <ul>
    <li>
      {{ provideData.todoList }}
    </li>
    
  </ul>
</template>

<script setup>
import { provide, ref } from 'vue';
import VuePreloader from './components/VuePreloader.vue';
import listSection from './components/listSection.vue';


const showInput = ref(false);
const textInput = ref('');

const provideData = ref({
  todoList: []
});
const newTodo = () => {
  showInput.value = !showInput.value;
};
const todo= (event) =>{
  textInput.value = event.target.value
  provideData.value.todoList.push({
    id: new Date().getTime(),
    text : textInput.value
  })

}
console.log('provideData.todoList :>> ', provideData.todoList);

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

