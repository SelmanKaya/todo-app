<template>
    <button @click="go">GENEL</button>
    <hr>
    <button @click="go">Ingilizce Kursu</button>
    <hr>
    <button @click="go">Faturalar</button>
    <hr>
    <button @click="go">Alisveris</button>
    <hr>
    <button @click="go">Proje</button>

</template>
<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const go = () => {
    router.push({ name: 'mainPage' })
}
</script>