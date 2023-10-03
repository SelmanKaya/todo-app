<template>
    <h3 class=" font-semibold text-4xl mb-5">YAPILACAK TODO ICIN BASLIK SECINIZ</h3>
    <button @click="go('Genel')" class=" bg-green-500 hover:bg-green-600 text-2xl text-white rounded-lg  px-8  h-8 m-2  transition-colors ">Genel</button>
    <br>
    <button @click="go('Ingilizce')" class=" bg-green-500 hover:bg-green-600 text-2xl text-white rounded-lg  px-8  h-8 m-2 transition-colors ">Ingilizce Kursu</button>
    <br>
    <button @click="go('Faturalar')" class=" bg-green-500 hover:bg-green-600 text-2xl text-white rounded-lg  px-8  h-8 m-2 transition-colors ">Faturalar</button>
    <br>
    <button @click="go('Alisveris')" class=" bg-green-500 hover:bg-green-600 text-2xl text-white rounded-lg  px-8  h-8 m-2 transition-colors ">Alisveris</button>
    <br>
    <button @click="go('Proje')" class=" bg-green-500 hover:bg-green-600 text-2xl text-white rounded-lg  px-8  h-8 m-2 transition-colors ">Proje</button>

</template>
<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const go = (butonAdi) => {
    router.push({ name: 'mainPage', params: { butonAdi } })
}
console.log('router :>> ', router);
</script>