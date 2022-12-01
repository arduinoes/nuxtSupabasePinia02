<script setup>
defineProps({
  superheroe: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="superheroe.imagen" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ superheroe.nombre }}</h5>
      <p class="card-text">
        {{ superheroe.id }}
      </p>
      <a href="#" class="btn btn-primary">Leer más</a>
    </div>
  </div>
</template>
