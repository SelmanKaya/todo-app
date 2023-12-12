<template >
  <h3 class="p-6 items-center text-3xl font-semibold">{{ $t('todoList') }}</h3>
  <!-- <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" /> -->
  <VuePreloader />
  <div class="grid grid-cols-3">
    <div class="flex flex-row justify-center ">
      <ul class=" flex flex-col gap-3">
        <li class="bg-gray-100 rounded-md p-2" v-for="item in $store.state.todoList" :key="item.id">
          <p class="font-semibold">{{ $t('categoryName') }}: {{ item.category }}</p> <!-- calismadi bende anlamadim -->
          <div class="font-semibold">
            {{ $t('myTodo') }} :
            {{ item.text }}
          </div>

          <button
            class="inline-flex items-center font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 px-8  h-8  transition-colors justify-end"
            @click="deleteItem(item)">{{ $t('delete') }}</button>
          <hr>
          <label for="derece">{{ $t('enterImpotanceRating') }}:</label>
          <select id="derece" name="color" class="rounded-sm" v-model="item.onem">
            <!-- <option v-for="(onem, index) in onemText" :selected="item.onem == index">{{ onem }}</option> -->
            <option value="0">{{ $t('high') }}</option>
            <option value="1">{{ $t('middle') }}</option>
            <option value="2">{{ $t('low') }}</option>

          </select>
          <hr>
          <input type="checkbox" :id="item.id" @change="disableCheckbox(item)" :disabled="item.checked"
            :checked="item.checked">
          <label :for="item.id">{{ $t('complated') }}</label>
          <hr class="p-3">
          <!-- hala tamamlandi isaretleyince hepsini birden isaretliyo -->
        </li>

      </ul>
    </div>
    <div class="flex flex-col items-center w-96 gap-3">
      <div class=" bg-gray-100 p-3  mx-auto  items-center justify-center rounded-lg w-full ">

        <div class="flex gap-3">
          <input class="border-zinc-500 border-solid border-2 h-8 rounded-md px-3 flex-grow" id="textTodo"
            v-model="textInput" :placeholder="$t('enterTask')" @keydown.enter="todo(textTodo)" />
          <select id="derece" name="color" class="rounded-sm" v-model="selectInput">
            <!-- <option v-for="(onem, index) in onemText" :selected="item.onem == index">{{ onem }}</option> -->
            <option value="0">{{ $t('high') }}</option>
            <option value="1">{{ $t('middle') }}</option>
            <option value="2">{{ $t('low') }}</option>

          </select>
        </div>
        <button
          class=" bg-blue-500 hover:bg-blue-700 text-white font-semibold   transition-colors py-1 px-3 rounded-md w-full mt-3"
          @click="todo(textTodo)">{{ $t('addTodo') }}</button>
        <!-- <label for="textTodo"></label> -->

      </div>
      <button @click="goHome()"
        class="px-8 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full transition-colors">{{ $t('selectNewCategory') }}</button>

      <label for="lng" class=" pr-5"> {{ $t('chooseLanguage') }}
        <select v-model="language" @change="setLanguage(language)" id="lng">
          <option value="tr">TR</option>
          <option value="en">EN</option>
        </select>
      </label>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VuePreloader } from 'vue-preloader';
//preloader yaptik ama hatali biraz
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

import { useI18n } from 'vue-i18n';
import NoWorkResult from 'postcss/lib/no-work-result';
const router = useRouter()
const store = useStore()

const showInput = ref(false);
const textInput = ref('');
const selectInput = ref(0);


const language = ref("en");

console.log('router :>> ', router);

const { t, locale, availableLocales, localItems } = useI18n();


const setLanguage = (lang) => {
  locale.value = lang
}


const todo = () => {
  const newTodo = {
    id: new Date().getTime(),
    text: textInput.value,
    checked: false,
    onem: selectInput.value,
    category: router.currentRoute.value.query.category
  };
  if (newTodo.text == '') {
    alert("bos bırakılamaz")
  }
  else {
    textInput.value = '';

    store.dispatch('addNewTodo', newTodo);
  };
}

const deleteItem = (todoItem) => {
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

</script>