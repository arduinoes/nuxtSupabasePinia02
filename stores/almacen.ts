import { defineStore } from 'pinia'

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mgqasbkqqquvixgxsfgo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ncWFzYmtxcXF1dml4Z3hzZmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NTA0NjUsImV4cCI6MTk3OTUyNjQ2NX0.IOpbZhjdAJzMzpuhbT-lbkYmlprOHEbQMNenJHxwElk');

export interface Superheroes {
  id: string;
  nombre: string;
  imagen: string;
}

interface Estado {
  superheroes: Superheroes[];
}

export const almacen = defineStore({
  id: "main",
  state: (): Estado => ({
    superheroes: [],
}),
  actions: {
    async obtenerSuperheroes() {
      try {
        const { data, error } = await supabase
          .from("superheroes")
          .select("nombre, imagen")
          .order("id");
        let datos = data;
        this.superheroes = datos as any;
        console.log("Datos: ", datos)
        console.log("Superheroes: ", this.superheroes)

      } catch (err) {
        console.error("Ha ocurrido un error accediendo a la Base de Datos", err);
      }
    },
  },
})
