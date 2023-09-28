<template>
    <!-- <VuePreloader color="blue" scale="0.6" /> -->
  
    <h3>ToDo List</h3>
    <!-- <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" /> -->
    <hr>
    <listSection />
    <button @click="newTodo">todo ekle</button>
    <hr>
    <label for="textTodo"></label>
    <input v-if="showInput" id="textTodo" v-model="textInput"  placeholder="task giriniz..." @keydown.enter="todo(textTodo)"/> 
    <ul>
      <li v-for="item in provideData.todoList"  :key="item.id">
        {{ item.text }}
        <button class="red" @click="deleteItem(item)">Sil</button>
        <hr>
        <label for="derece">Onem derecesi seçin:</label>
          <select id="derece" name="color">
            <option value="green">yuksek</option>
            <option value="blue">orta</option>
            <option value="red">dusuk</option>
          </select>
          <hr>
          <input type="checkbox" :id="item.id" v-model="isChecked" @change="disableCheckbox" :disabled="isDisabled">
          <label :for="item.id">Tamamlandı</label><br>
      </li>
      
    </ul>
  </template>
  
  <script setup>
  import { provide, ref } from 'vue';
  import VuePreloader from '../components/VuePreloader.vue';
  import listSection from '../components/listSection.vue';
  
  
  const showInput = ref(false);
  const textInput = ref('');
  
  const provideData = ref({
    todoList: [
      // {
      //   id : 0,
      //   text : "task 1"
      // }
    ]
  });
  const newTodo = () => {
    showInput.value = !showInput.value;
  };
  // const todo= (event) =>{
  //   textInput.value = event.target.value
  //   provideData.value.todoList.push({
  //     id: new Date().getTime(),
  //     text : textInput.value
  //   })
  // }
  const todo = () => {
    provideData.value.todoList.push({
      id: new Date().getTime(),
      text: textInput.value
    })
    textInput.value = ''
  }
  console.log('provideData.todoList :>> ', provideData.todoList);
  
  const deleteItem = (todoItem) => {
    provideData.value.todoList = provideData.value.todoList.filter(t => t !== todoItem);
  };
  
  // const addNewTodo = (todo) => {
  //   provideData.value.todoList.push({
  //     id: new Date().getTime(),
  //     text: todo
  //   });
  // };
  const isChecked = ref(false);
  const isDisabled = ref(false);
  const disableCheckbox = () => {
    if (isChecked.value) {
      isDisabled.value = true; // Checkbox işaretlendiyse devre dışı bırak
    }
  };
  console.log('provideData :>> ', provideData);
  provide("provideData", provideData.value);
  provide("deleteItem", deleteItem);
  </script>
  
  