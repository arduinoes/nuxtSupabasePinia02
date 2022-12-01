<script setup>

const client = useSupabaseClient()

const datos = reactive({
  superheroes: []
})

async function obtenerSuperheroes() {
  try {
    const { data, error } = await client
      .from("superheroes")
      .select("nombre, imagen")
      .order("id");
    datos.superheroes = data;
    //this.datos.obras = datos;
    console.log("Data: ", data)
    console.log("Datos Superheroes: ", datos.superheroes)

  } catch (err) {
    console.error("Error retrieving data from db", err);
  }
}

onMounted(() => {
  obtenerSuperheroes();
})

</script>

<template>
  <h1>Hola about</h1>
    <div class="row justify-content-center">
      <BaseCard
        class="col-4 m-2"
        v-for="superheroe in datos.superheroes"
        :key="superheroe.id"
        :superheroe="superheroe"
      />
  </div>
</template>