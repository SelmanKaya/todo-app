<template>
  <!-- <VuePreloader color="blue" scale="0.6" /> -->

  <h3 class=" p-6  items-center text-3xl font-semibold">ToDo List</h3>
  <!-- <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" /> -->
  <div class="  bg-cyan-100 mx-96 rounded-lg shadow-lg">
    <listSection />
    <button
      class=" px-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-full mt-4 transition-colors"
      @click="newTodo">todo ekle</button>
    <br>
    <label for="textTodo"></label>
    <input class=" border-x-zinc-500 px-8 h-8 m-4 rounded-lg" v-if="showInput" id="textTodo" v-model="textInput"
      placeholder="task giriniz..." @keydown.enter="todo(textTodo)" />
  </div>
  <div class=" bg-red-100 p-10 mx-96 rounded-lg shadow-lg">
    <ul>
      <li  v-for="item in $store.state.todoList" :key="item.id">
        <p class=" font-semibold">Kategori Adı: {{ $route.params.butonAdi }}</p> <!-- calismadi bende anlamadim -->
        Yapilacak todo :
        {{ item.text }}
        <button
        class=" inline-flex items-center font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 px-8  h-8  transition-colors justify-end"
          @click="deleteItem(item)">Sil</button>
        <hr>
        <label for="derece">Onem derecesi seçin:</label>
        <select id="derece" name="color" class=" rounded-sm">
          <option value="green">yuksek</option>
          <option value="blue">orta</option>
          <option value="red">dusuk</option>
        </select>
        <hr>
        <input type="checkbox" :id="item.id" v-model="isChecked" @change="disableCheckbox" :disabled="isDisabled">
        <label :for="item.id">Tamamlandı</label><hr class=" p-3">
        <!-- hala tamamlandi isaretleyince hepsini birden isaretliyo -->
      </li>

    </ul>
    <div>
      <button @click="goHome()" class="px-8 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full mt-4 transition-colors">Yeni kategori Sec</button>
    </div>
  </div>
</template>
  
<script setup>
import { provide, ref } from 'vue';
import VuePreloader from '../components/VuePreloader.vue';
//preloader yaptik ama hatali biraz
import listSection from '../components/listSection.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

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
  const newTodo = {
    id: new Date().getTime(),
    text: textInput.value,
  };
  provideData.value.todoList.push(newTodo);
  textInput.value = '';

  // Vuex mağazasına todo eklemek için eylemi gönderin
  $store.dispatch('addNewTodo', newTodo);
};
console.log('provideData.todoList :>> ', provideData.todoList);

const deleteItem = (todoItem) => {
  provideData.value.todoList = provideData.value.todoList.filter(t => t !== todoItem);

  // Vuex mağazasından todo'yu silmek için eylemi gönderin
  $store.dispatch('deleteItem', todoItem.id);
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
    isDisabled.value = true;
  }
};
const goHome = () => {
    router.push({ name: 'homePage'})
}
console.log('provideData :>> ', provideData);
provide("provideData", provideData.value);
provide("deleteItem", deleteItem);
</script>
  
  