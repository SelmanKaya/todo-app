<template>
    <h3 class=" font-semibold text-4xl mb-5">{{ $t('chooseTodo') }}</h3>
    <div class=" flex flex-col gap-2">
        <button v-for="item in categories" @click="go(item)"
            class=" bg-green-500 hover:bg-green-600 text-2xl text-white rounded-lg  px-8  h-8 m-auto   transition-colors  ">
            {{ $t(item) }}</button>

    </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import { useI18n } from 'vue-i18n';

const categories = ['general', 'english', 'bills', 'shopping', 'project']//ıngılızce tut kucuk harflerle baslasın
const router = useRouter()


const go = (item) => {
    router.push({ name: 'mainPage', query: { category : item } })//vuejs router query
}
console.log('router :>> ', router);
</script>