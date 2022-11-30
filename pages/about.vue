<script setup>

const client = useSupabaseClient()

const datos = reactive({
  obras: []
})

async function obtenerObras() {
  try {
    const { data, error } = await client
      .from("superheroes")
      .select("nombre, imagen")
      .order("id");
    datos.obras = data;
    //this.datos.obras = datos;
    console.log("About: ", data)
    console.log("About2: ", datos.obras)

  } catch (err) {
    console.error("Error retrieving data from db", err);
  }
}

onMounted(() => {
  obtenerObras();
})

</script>

<template>
  <h1>Hola about</h1>
    <div class="row justify-content-center">
      <BaseCard
        class="col-4 m-2"
        v-for="obra in datos.obras"
        :key="obra.id"
        :obra="obra"
      />
  </div>
</template>