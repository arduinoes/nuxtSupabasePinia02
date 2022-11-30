import { defineStore } from 'pinia'

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mgqasbkqqquvixgxsfgo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ncWFzYmtxcXF1dml4Z3hzZmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NTA0NjUsImV4cCI6MTk3OTUyNjQ2NX0.IOpbZhjdAJzMzpuhbT-lbkYmlprOHEbQMNenJHxwElk');

export interface Obras {
  id: string;
  nombre: string;
  imagen: string;
}

interface Estado {
  obras: Obras[];
}

export const almacen = defineStore({
  id: "main",
  state: (): Estado => ({
    obras: [],
}),
  actions: {
    async obtenerObras() {
      try {
        const { data, error } = await supabase
          .from("superheroes")
          .select("nombre, imagen")
          .order("id");
        let datos = data;
        this.obras = datos as any;
        console.log("Obras: ", datos)
        console.log("stage: ", this.obras)

      } catch (err) {
        console.error("Error retrieving data from db", err);
      }
    },
  },
})
