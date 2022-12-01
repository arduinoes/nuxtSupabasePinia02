<script setup>
// import BaseCard from '../components/BaseCard.vue'
 import { almacen } from '../stores/almacen.ts'

const datos = almacen()

onMounted(() => {
  datos.obtenerSuperheroes();
})
</script>

<template>
  <h1>Hola index</h1>
  <div class="row justify-content-center">
    <BaseCard
      class="col-4 m-2"
      v-for="superheroe in datos.superheroes"
      :key="superheroe.author"
      :superheroe="superheroe"
    />
  </div>
</template>
