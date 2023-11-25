<template>
  <!-- <VuePreloader color="blue" scale="0.6" /> -->

  <h3 class="p-6 items-center text-3xl font-semibold">{{ $t('todoList')}}</h3>
  <!-- <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" /> -->
  <div>
    <div class="flex flex-row">
      buraya da yan tarafa konulcak todo lar eklenıcek
    </div>
    <div class="bg-cyan-100 mx-auto rounded-lg shadow-lg w-96">
      <listSection />
      <button
        class="px-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-full mt-4 transition-colors"
        @click="newTodo">{{ $t('addTodo')}}</button>
      <br>
      <!-- <label for="textTodo"></label> -->
      <input class="border-x-zinc-500 px-8 h-8 m-4 rounded-lg" v-if="showInput" id="textTodo" v-model="textInput"
        :placeholder="$t('enterTask')" @keydown.enter="todo(textTodo)" />
    </div>
    <div class="bg-red-100 p-10 mx-auto rounded-lg shadow-lg mb-10 w-96 items-center">
      <ul>
        <li v-for="item in $store.state.todoList" :key="item.id">
          <p class="font-semibold">{{ $t('categoryName')}}: {{ newTodo.category}}</p> <!-- calismadi bende anlamadim -->
          <div class="font-semibold">
            {{ $t('myTodo')}} :
            {{ item.text }}
          </div>

          <button
            class="inline-flex items-center font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 px-8  h-8  transition-colors justify-end"
            @click="deleteItem(item)">{{ $t('delete')}}</button>
          <hr>
          <label for="derece">{{ $t('enterImpotanceRating')}}:</label>
          <select id="derece" name="color" class="rounded-sm">
            <option v-for="(onem, index) in onemText" :selected="item.onem == index">{{ onem }}</option>
          </select>
          <hr>
          <input type="checkbox" :id="item.id" @change="disableCheckbox(item)" :disabled="item.checked"
            :checked="item.checked">
          <label :for="item.id">{{ $t('complated')}}</label>
          <hr class="p-3">
          <!-- hala tamamlandi isaretleyince hepsini birden isaretliyo -->
        </li>

      </ul>
      <div>
        <button @click="goHome()"
          class="px-8 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full mt-4 transition-colors">{{$t('selectNewCategory')}}</button>
      </div>
    </div>
    <label for="lng" class=" pr-5"> {{ $t('chooseLanguage') }}</label>
    <select v-model="language" @change="setLanguage(language)" id="lng">
    <option value="tr">TR</option>
    <option value="en">EN</option>
  </select>
    <!-- {{ $createI18n.locale }} -->
  </div>
</template>
  
<script setup>
import { provide, ref , onMounted} from 'vue';
//import VuePreloader from '../components/VuePreloader.vue';
//preloader yaptik ama hatali biraz
import listSection from '../components/listSection.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

import { useI18n } from 'vue-i18n';
const router = useRouter()
const store = useStore()

const showInput = ref(false);
const textInput = ref('');

const onemText = ["yuksek", "orta", "dusuk"]; 
const language = ref("en");


const provideData = ref({
  todoList: [
    // {
    //   id : 0,
    //   text : "task 1"
    // }
  ]
});

const { t, locale, availableLocales, localItems } = useI18n();


const setLanguage = (lang) => {
  locale.value = lang
}

const newTodo = () => {
  showInput.value = !showInput.value;
};

const todo = () => {
  const newTodo = {
    id: new Date().getTime(),
    text: textInput.value,
    checked: false,
    onem: 0,
    category: router.query.category
  };
  if (newTodo.text == '') {
    alert("bos bırakılamaz")
  }
  else {
    provideData.value.todoList.push(newTodo);
    textInput.value = '';

    store.dispatch('addNewTodo', newTodo);
  };
}

const deleteItem = (todoItem) => {
  provideData.value.todoList = provideData.value.todoList.filter(t => t !== todoItem);

  store.dispatch('deleteItem', todoItem.id);
};

const disableCheckbox = (item) => {
  console.log(item.checked)
  if (!item.checked) {
    item.checked = true
  }
};
 
const goHome = () => {
  router.push({ name: 'homePage' })
}

provide("provideData", provideData.value);
provide("deleteItem", deleteItem);
</script>
