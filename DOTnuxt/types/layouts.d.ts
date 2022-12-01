import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/miranda/Desktop/nuxtSupabasePinia01-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}