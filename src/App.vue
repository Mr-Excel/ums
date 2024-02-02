<template>
  <form @submit="submitHandler" id="my-form">
    <input type="text" v-model="val" />
    <input type="text" />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";

const val = ref('')

function submitHandler() {
  alert(val.value)
}
</script>

<style scoped>
button{
  color: rgb(255, 0, 0)
}
</style>
